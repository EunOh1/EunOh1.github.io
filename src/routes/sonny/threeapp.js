import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import workDb from './models.js';
"use strict";

export default class ThreeApp{
    constructor(){
        this.loadCounter = 0;
        this.nowLoading = 0;
        this.running = true; // 디스트로이 시 false 로 변경되는 상태 스테이트
        this.objGroup = null; // isMesh 이면 gltf.scene 을 복사 스테이트
        this.originalMaterial = null; // isMesh 이면 기본 머티리얼 복사하스테이트
        this.baseMesh = null; // isMesh 이면 mesh 를 복사 스테이트
        this.rotateObject = false; // 오브젝트 로테이션 상태 스테이트

        const guiTop = document.querySelector('.gui-main-3d');
        this._guiTop = guiTop;
        const loadDiv = document.querySelector('.xyz-loading');
        this._loadDiv = loadDiv;
        const xyzCanvas = document.querySelector('.xyz-canvas');
        this._xyzCanvas = xyzCanvas;
        const overlay = document.querySelector('.temporal');
        this._overlay = overlay;

        const fixedWidth = window.innerWidth; 
        const fixedHeight = window.innerHeight;
        this._fixedWidth = fixedWidth;
        this._fixedHeight = fixedHeight;

        /************* renderer ***************/
        const renderer = new THREE.WebGLRenderer({ antialias: true }); //canvas : canvas,
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( fixedWidth, fixedHeight);
        renderer.setClearColor(0xffffff, 1);
        // renderer.autoClear = false;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.bias = -0.01;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        xyzCanvas.appendChild(renderer.domElement ); // 캔버스에 렌더러 적용
        this._renderer = renderer;

        /************* scene ***************/
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xc7c7c7);
        scene.fog = new THREE.Fog( 0xc7c7c7, 10, 30 );
        this._scene = scene;

        /************ init App **************/
        this.delCache();
        this._setupLoader();
        this._setupBasicWorld();
        this._setupModel(workDb[0]);
        this._setupLight();
        this._setupCamera();
        this._setupControls();
        this._setupEffects();

        window.onresize = this.resize.bind(this);
		this.resize();

        requestAnimationFrame(this.render.bind(this));
    };
    _isMobile(){
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };
    _isAndroid(){
        return /Android/i.test(navigator.userAgent);
    };
    _setupLoader(){
        /************* model loader ***************/
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
        loader.setDRACOLoader( dracoLoader );
        this._loader = loader;
    };
    _setupCamera(){
        /************* camera ***************/
        const camera = new THREE.PerspectiveCamera(
            85, // FOV
            this._fixedWidth / this._fixedHeight, // aspect ratio
            0.5, // near
            50 // far 10000
        );

        this._isMobile() ? camera.position.set(0,2,17) : camera.position.set(0,5,27);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
        this._camera = camera;
    };
    _setupLight(){
        /************* lights ***************/
        const colors = {
            sun : 0xfdfdf4,
            ired : 0xdcf6fe,
            bulb : 0xffe4c3,
            pin : 0xffffff
        };

        const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.3 );
        hemiLight.position.set( 0, 20, -20 );

        const pointLight = new THREE.PointLight( 0xffffff, 1, 80 );
        pointLight.position.set( 0, 20, 13 );
        pointLight.castShadow = true; // default false
        pointLight.shadow.radius = 6; // 그림자 반경
        //Set up shadow properties for the light
        pointLight.shadow.mapSize.width = 1024; // 2x 그림자 품질 조정
        pointLight.shadow.mapSize.height = 1024; // 2x
        pointLight.shadow.camera.near = 1; // default
        pointLight.shadow.camera.far = 10000; // default
        // pointLight.shadow.camera.focus = 1;
        // pointLight.shadow.distance = 100;

        const sunLight = new THREE.DirectionalLight(colors.sun, 1.1);
        sunLight.position.set( 0, 20, 30 );

        const iredLight = new THREE.DirectionalLight(colors.ired, 1.6);
        iredLight.position.set( 0, 20, 30 );

        const bulbLight = new THREE.DirectionalLight(colors.bulb, 1.7);
        bulbLight.position.set( 0, 20, 30 );

        const pinLight = new THREE.PointLight( colors.pin, 3.3, 50, 3 );
        pinLight.position.set( 0, 10, 5 );

        this._scene.add(hemiLight);
        this._scene.add(pointLight)
        this._pointLight = pointLight;
        this._sunLight = sunLight;
        this._iredLight = iredLight;
        this._bulbLight = bulbLight;
        this._pinLight = pinLight;
    };
    _setupBasicWorld(){
        // const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 1000, 1000 ), new THREE.MeshPhongMaterial( { color: 0xeeeeee, depthWrite: false } ) );
        // mesh.rotation.x = - Math.PI / 2;
        // mesh.position.y = -3;
        // mesh.receiveShadow = true;
        // this._scene.add( mesh );

        const shadowMeshGeo = new THREE.PlaneGeometry( 1000, 1000 );
            shadowMeshGeo.rotateX(- Math.PI / 2);
        const shadowMeshMat = new THREE.ShadowMaterial();
            shadowMeshMat.opacity= 0.5;
        const shodowMesh = new THREE.Mesh( shadowMeshGeo, shadowMeshMat );
            shodowMesh.position.y = -6;
            shodowMesh.receiveShadow = true;
        this._scene.add( shodowMesh );

        // basic material
        const basicMaterial = new THREE.MeshBasicMaterial( { color: 0xfff7e0 })
        this.basicMaterial = basicMaterial;

        // phong material
        const phongMaterial = new THREE.MeshPhongMaterial({
            color: 0x8a8a8a,  // 예시
            // specular: 0x050505,
            // shininess: 100,
        });
        phongMaterial.roughness = 0.4;
        phongMaterial.metalness = 0.9;
        this.phongMaterial = phongMaterial;

        const physicalMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            reflectivity : 0.5,
            transmission : 0.8,
            roughness : 0.2,
            metalness : 0,
            clearcoat : 0.2,
            clearcoatRoughness : 0.25,
            ior : 1.7,
            thickness : 10.0
        })
        this.physicalMaterial = physicalMaterial;
    };
    _setupModel(model){
        this._loader.load(
            model.obj,       
            (gltf)=>{
                const box = new THREE.Box3().setFromObject( gltf.scene );
                const size = box.getSize( new THREE.Vector3() );
                const scaleFactor = 8 / Math.max(size.x, size.y, size.z);
                gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

                gltf.scene.rotation.y = -1.7;
                // gltf.scene.position.y = -3;
                gltf.scene.position.set(0, -6, 0) //0, -3, 17

                this.objGroup = gltf.scene; // 그룹 참조 저장 회전 등을 위해

                gltf.scene.name = model.nick;
                gltf.scene.number = model.num;

                this._scene.add(gltf.scene);

                gltf.scene.traverse((object)=>{
                    if ( object.isMesh ) {
                        object.castShadow = true; // traverse 돌려서 mesh 인 애들 전부 castshadow
                        object.receiveShadow = true;

                        // console.log(object)

                        // wireframe helper
                        const wireframeGeometry = new THREE.WireframeGeometry( object.geometry );
                        const wireframeMaterial = new THREE.LineBasicMaterial( { color: 0xff0000 } );
                        const wireframe = new THREE.LineSegments( wireframeGeometry, wireframeMaterial );
                        wireframe.visible = false;
                        object.add( wireframe );

                        this.originalMaterial = object.material; //  머티리얼 복사
                        this.imageMap = object.material.map; // 이미지 맵 복사 
                        this.baseMesh = object; // 메쉬 복사
                        this.wireframe = wireframe; // 와이어프레임 복사
                    }
                })
            }, 
            ( xhr ) => {
                this.loadCounter = ( xhr.loaded / xhr.total * 100 );

                this._loadDiv.innerHTML = `Loading.. ${Math.round(this.loadCounter)}%`;
                this._overlay.style.transition = `opacity ${ this.loadCounter / 100 }s ease-out ${ this.loadCounter / 100 }s`;
                if(this.loadCounter === 100){
                    this.nowLoading = 1;
                    this._loadDiv.remove();
                    this._overlay.style.opacity = "0";
                    this._overlay.style.display = 'none';
                }else if(this.loadCounter < 100){
                    this.nowLoading = 0;
                }
            }, 
            ( error ) => { 
                this._loadDiv.innerHTML = `error ocurred! restart page!`;
                this._loadDiv.style.fontSize = '1rem';
                console.error( error );
            }
        )
    };
    _setupControls(){
        /************* controls ***************/
        const controls = new OrbitControls( this._camera, this._renderer.domElement );
        controls.target.set(0, -3, 0); // 모델의 위치로 설정
        controls.minDistance = 3.5; // 객체에 가까워질 수 있는 최소 거리
        controls.maxDistance = 8; // 객체에서 멀어질 수 있는 최대 거리
        controls.autoRotate = false;
        controls.update();
        this._controls = controls;
    };
    _setupEffects(){
        /************* composer **************/
        const composer = new EffectComposer( this._renderer );

        const glitchPass = new GlitchPass();
        glitchPass.name = 'glitch'
        this.glitchPass = glitchPass;
        // composer.addPass( glitchPass );

        const renderPixelatedPass = new RenderPixelatedPass( 15, this._scene, this._camera );
        renderPixelatedPass.name = 'pixel'
        this.pixelPass = renderPixelatedPass;
        // composer.addPass( renderPixelatedPass );

        const effect1 = new ShaderPass( DotScreenShader );
        effect1.uniforms[ 'scale' ].value = 3;
        effect1.name = 'dot'
        this.dotScreenPass = effect1;
        // composer.addPass( effect1 );

        // const bloomPass = new UnrealBloomPass( new THREE.Vector2( this._fixedWidth, this._fixedHeight ), 1.5, 0.4, 0.85 );
        // composer.addPass( bloomPass );

        const genCubeUrls = ( prefix, postfix ) => {
            return [
                prefix + 'px' + postfix, prefix + 'nx' + postfix,
                prefix + 'py' + postfix, prefix + 'ny' + postfix,
                prefix + 'pz' + postfix, prefix + 'nz' + postfix
            ];
        };

        const pmremGenerator = new THREE.PMREMGenerator(this._renderer)
        const ldrUrls = genCubeUrls( '/assets/whitecube2/', '.png' );
        const envTexture = new THREE.CubeTextureLoader().load( ldrUrls, ( ldrCubeMap ) => {
            this.physicalMaterial.envMap = pmremGenerator.fromCubemap(envTexture).texture
            pmremGenerator.dispose();
            this._cubeMap = ldrCubeMap;
        });        

        const renderPass = new RenderPass( this._scene, this._camera );
        renderPass.clear = false;
        composer.addPass( renderPass );

        this._composer = composer;
    }
    _removeLight(){
        if(this._sunLight || this._iredLight || this._bulbLight || this._pinLight){
            this._scene.remove( this._sunLight );
            this._scene.remove( this._iredLight );
            this._scene.remove( this._bulbLight );
            this._scene.remove( this._pinLight );
        } 
    };
    _removeLightPlus(){
        this._removeLight();
        const rightIcon = document.querySelectorAll('.xyzright');
        rightIcon.forEach((e)=>{
            if(e.classList.value.includes('xyzon')) e.classList.remove('xyzon');
        });
    }
    _lightModeChange(target){
        switch(target){
            case 'wb_sunny' :
                this._removeLight();
                this._scene.add( this._sunLight );
                break;
            case 'wb_iridescent' :
                this._removeLight();
                this._scene.add( this._iredLight );
                break;
            case 'lightbulb' : 
                this._removeLight();
                this._scene.add( this._bulbLight );
                break;
            case 'highlight' :
                this._removeLight();
                this._scene.add( this._pinLight );
                break;
        }
    };
    delCache(){
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                return caches.delete(key);
            }));
        });
    };
    resize() {
		const width = this._xyzCanvas.clientWidth;
		const height = this._xyzCanvas.clientHeight;
		const aspect = width / height;

		if (this._camera instanceof THREE.PerspectiveCamera) {
			// PerspectiveCamera
			this._camera.aspect = aspect;
		} else {
			// OrthographicCamera
			this._camera.left = aspect * -1;
			this._camera.right = aspect * 1;
		}

		this._camera.updateProjectionMatrix();
		this._renderer.setSize(width, height);
	};
    render() {
            if (!this.running) return;
            this._animate();
            // this._controls.update();
	};
    _animate() {
        requestAnimationFrame( this._animate.bind(this) );

        if(this.rotateObject){
            this.objGroup.rotation.y += -0.01;
        }

        // this._renderer.render(this._scene, this._camera);// 애를 올리면 그림자 위치 바뀜
        this._composer.render();
    };
    _destroy() {
        this.running = false;
        this._renderer.dispose();
        this.modelDispose(this._scene);
    };
    modelDispose(scene){
        scene.traverse(object => {
            // Geometry 삭제
            if (object.geometry) {
                object.geometry.dispose();
                console.log('geo disposed!')
            }
            // Material 삭제
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach(material => this.disposeMaterial(material));
                    console.log('material array disposed!')
                } else {
                    this.disposeMaterial(object.material);
                    console.log('material disposed!')
                }
            }
        })
    };
    disposeMaterial(material) {
        // 텍스처 삭제
        if (material.map) material.map.dispose();
        if (material.lightMap) material.lightMap.dispose();
        if (material.bumpMap) material.bumpMap.dispose();
        if (material.normalMap) material.normalMap.dispose();
        if (material.specularMap) material.specularMap.dispose();
        if (material.envMap) material.envMap.dispose();
        // Material 자체 삭제
        material.dispose();
    };
    toggleRotation(target){
        if(target.classList.value.includes('xyzon')){
            target.classList.remove('xyzon');
            this.rotateObject = false;
        }else{
            target.classList.add('xyzon');
            this.rotateObject = true;
        }
    }
    xyzonViewRemove(){
        const viewIcon = document.querySelectorAll('.xyzview');
        viewIcon.forEach((e)=>{
            e.classList.remove('xyzon');
        });
    }
    xyzonEffectsRemove(){
        const effectsIcon = document.querySelectorAll('.xyzeffects');
        effectsIcon.forEach((e)=>{
            e.classList.remove('xyzon');
        });
    }
    toggleWireframe(target){
        if(target.classList.value.includes('xyzon')){
            this.xyzonViewRemove();
            this.wireframe.visible = false;
            this.baseMesh.material = this.originalMaterial;
        }else{
            this.xyzonViewRemove();
            target.classList.add('xyzon');
            this.wireframe.visible = true;
            this.baseMesh.material = this.basicMaterial;
            this._scene.background = new THREE.Color(0xc7c7c7)
        }
    };
    toggleMap(target){
        if(target.classList.value.includes('xyzon')){
            this.xyzonViewRemove();
            this.baseMesh.material = this.originalMaterial;
        }else{
            this.xyzonViewRemove();
            target.classList.add('xyzon');
            this.wireframe.visible = false;
            this.baseMesh.material = this.phongMaterial;
            this._scene.background = new THREE.Color(0xc7c7c7)
        }
    }
    toggleReflection(target){
        if(target.classList.value.includes('xyzon')){
            this.xyzonViewRemove();
            this.baseMesh.material = this.originalMaterial;
            this._scene.background = new THREE.Color(0xc7c7c7)
        }else{
            this.xyzonViewRemove();
            this._removeLightPlus();
            target.classList.add('xyzon');
            this.wireframe.visible = false;
            this.baseMesh.material = this.physicalMaterial;
            this._scene.background = this._cubeMap; // 배경 적용!
        }
    }
    togglePixelate(target){
        if(target.classList.value.includes('xyzon')){
            this.xyzonEffectsRemove();
            while (this._composer.passes.length > 1) {
                const pass = this._composer.passes[1];
                this._composer.removePass(pass);
            }
            this._pointLight.intensity = 1;
        }else{
            this.xyzonEffectsRemove();
            target.classList.add('xyzon');
            while (this._composer.passes.length > 1) {
                const pass = this._composer.passes[1];
                this._composer.removePass(pass);
            }
            this._composer.addPass(this.pixelPass);
            this._pointLight.intensity = 5;
        }
    }
    toggleGlitch(target){
        if(target.classList.value.includes('xyzon')){
            this.xyzonEffectsRemove();
            while (this._composer.passes.length > 1) {
                const pass = this._composer.passes[1];
                this._composer.removePass(pass);
            }
            this._pointLight.intensity = 1;
        }else{
            this.xyzonEffectsRemove();
            target.classList.add('xyzon');
            while (this._composer.passes.length > 1) {
                const pass = this._composer.passes[1];
                this._composer.removePass(pass);
            }
            this._composer.addPass(this.glitchPass);
            this._pointLight.intensity = 5;
        }
    }
    toggleDotScreen(target){
        if(target.classList.value.includes('xyzon')){
            this.xyzonEffectsRemove();
            while (this._composer.passes.length > 1) {
                const pass = this._composer.passes[1];
                this._composer.removePass(pass);
            }
            this._pointLight.intensity = 1;
        }else{
            this.xyzonEffectsRemove();
            target.classList.add('xyzon');
            while (this._composer.passes.length > 1) {
                const pass = this._composer.passes[1];
                this._composer.removePass(pass);
            }
            this._composer.addPass(this.dotScreenPass);
            this._pointLight.intensity = 1;
        }
    }
}