<script>
    import { onDestroy, onMount } from 'svelte';
    import ThreeApp from './threeapp';
    import "./+viewer_style.css";
    import { browser } from '$app/environment'; // (was '$app/env' in a pre 1.0 SvelteKit version)

    let app;
    let idleTime = 0;
    let lastTapTime = 0;
    const delay = 300; // 더블 탭으로 판단하기 위한 시간 간격(밀리초)
    let interval;

    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };

    function onOff(target){
        const rightIcon = document.querySelectorAll('.xyzright');
        rightIcon.forEach((el)=>{
            el.classList.remove('xyzon');
        });
        target.classList.add('xyzon');
    };

    function toggle(target){
        const rightIcon = document.querySelectorAll('.xyzright');
        if(target.classList.value.includes('xyzon')){
            rightIcon.forEach((el)=>{
                el.classList.remove('xyzon');
            });
            app._removeLight();
        }else{
            onOff(target);
            app._lightModeChange(target.innerHTML);
        }
    };

    const handleLightClick = (e) => {
        if(app !== undefined && app !== null){
            switch(e.target.innerHTML){
                case '360' :
                        app.toggleRotation(e.target)
                    break;
                case 'wb_sunny' :
                        toggle(e.target);
                    break;
                case 'wb_iridescent' :
                        toggle(e.target);
                    break;
                case 'lightbulb' :
                        toggle(e.target);
                    break;
                case 'highlight' :
                        toggle(e.target);
                    break;
                case 'grid_on' :
                        app.toggleWireframe(e.target);
                    break;
                case 'contrast' :
                        app.toggleMap(e.target);
                    break;
                case 'trip_origin' :
                        app.toggleReflection(e.target);
                    break;
                case 'grid_view' :
                        app.togglePixelate(e.target);
                    break;
                case 'graphic_eq' :
                        app.toggleGlitch(e.target);
                    break;
                case 'blur_on' :
                        app.toggleDotScreen(e.target);
                    break;
            }
        }else{
            console.log('not ready!');
            return;
        }
    };

    const handleMouseDown = (e) => {
        if(app){
            if(app.nowLoading === 0 || e.detail === 2){
                alert('좀 천천히하셈');
            }
        }     
    };

    const handleTouchEnd = (e) => {
        // e.preventDefault(); // 클릭이벤트 발생 방지;
        let currentTime = new Date().getTime();
        let timeDifference = currentTime - lastTapTime;

        if(timeDifference < delay && timeDifference > 0){
            alert('좀 천천히하셈');
        } else {
            if(app.nowLoading === 0){
                alert('좀 천천히하셈');
            }
        }
        lastTapTime = currentTime; // 마지막 탭 시간을 현재 시간으로 업데이트
    };

    function hiding(){
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';  
    };

    function seeking(){
        document.querySelector('header').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
    };

    const idleTimeReset = () => {
            idleTime = 0;
            console.log('idleTime reset');
    };

    onMount(async() => { 
        hiding();
        app = new ThreeApp();

        /** ====== Generate a resize event if the device doesn't do it ======  밖으로   */  
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener("orientationchange", () => window.dispatchEvent(new Event("resize")), false);
        window.addEventListener('resize', () => document.documentElement.style.setProperty('--vh', `${vh}px`));

        document.body.addEventListener('click', idleTimeReset);

        interval = setInterval(()=>{
            idleTime = idleTime + 1;
            if (idleTime >= 3) { // 3 minutes
                console.log('reload!')
                window.location.href = "/sonny";
            }
        }, 60000)

        // return() => {
        //     document.body.removeEventListener('click', idleTimeReset);
        //     clearInterval(interval);
        //     app._destroy();
        // }
    }); 

    onDestroy(() => {
        if (browser) {
            document.body.removeEventListener('click', idleTimeReset);
            clearInterval(interval);
            app._destroy();
        }
    })

</script>
<div class="gui-main-3d">
    <div class="temporal"></div>
    <div class="xyz-none-landscape"><h3>Looks good in portrait mode!</h3></div> 
    <div class="gui-wrapper-3d" on:mousedown={handleMouseDown} on:touchend={handleTouchEnd}>

        <div class="top-3d">
            <a href="/sonnyinfo"><span class="sonnyinfoa">info</span></a>
            <a href="/" on:click={() => seeking()}><span class="material-icons-outlined">clear</span></a>
        </div>

        <div class="mid-3d">
            <div class="mid-left-3d">       
                <!-- <span class="material-icons-outlined" on:click={(e)=>{ naviClick(e); }} on:keydown={(e)=>{naviClick(e)}}>navigate_before</span> -->
            </div>
            <div class="mid-right-3d">
                <!-- <span class="material-icons-outlined" on:click={(e)=>{ naviClick(e); }} on:keydown={(e)=>{naviClick(e)}}>navigate_next</span> -->
            </div>
            <div class="xyz-loading"></div>
        </div>

        <!-- <div class="mid-info {clicked === true ? 'active' : ''}">
            <svelte:element this='p'>{workDb[selectedNow].title}</svelte:element>
            <svelte:element this='p'>{workDb[selectedNow].author}</svelte:element>
            <svelte:element this='p'>{workDb[selectedNow].year}</svelte:element>
            <svelte:element this='p'>{workDb[selectedNow].size}</svelte:element>
            <svelte:element this='p'>{workDb[selectedNow].material}</svelte:element>                
        </div> -->

        <div class="btm-3d">
            <div class="btm-left-3d">
                <!-- <span class="material-icons-outlined less" on:click={()=>scrollStart()} on:keydown={()=> scrollStart()}>expand_less</span>   
                <span class="material-icons-outlined que" 
                    on:click={(e)=> {
                        !clicked ? e.currentTarget.style.color = "#ff6666" : e.currentTarget.style.color = "black";
                        clicked = !clicked;
                    }} 
                    on:keydown={()=> clicked = !clicked}>question_mark</span> -->
            </div>
            <div class="btm-right-3d" on:click={handleLightClick} on:keydown={handleLightClick}>
                <span class="material-icons-outlined ">360</span>
                <span class="material-icons-outlined xyzright">wb_sunny</span>
                <span class="material-icons-outlined xyzright">wb_iridescent</span>
                <span class="material-icons-outlined xyzright">lightbulb</span>
                <span class="material-icons-outlined xyzright">highlight</span>
                <span class="material-icons-outlined xyzview">grid_on</span>
                <span class="material-icons-outlined xyzview">contrast</span>
                <span class="material-icons-outlined xyzview">trip_origin</span>
                <span class="material-icons-outlined xyzeffects">grid_view</span>
                <span class="material-icons-outlined xyzeffects">graphic_eq</span>
                <span class="material-icons-outlined xyzeffects">blur_on</span>
                <!-- <div class="btm-right-control">
                    <span class="material-icons-outlined">arrow_upward</span>
                    <span class="material-icons-outlined">arrow_downward</span>
                    <span class="material-icons-outlined">arrow_back</span>
                    <span class="material-icons-outlined">arrow_forward</span>
                </div> -->
            </div>
        </div>
    
        <!-- <div class="gui-swipe-3d xyzhide" on:click={(e)=>handleClick(e)} on:keydown={(e)=>handleClick(e)}></div> -->

    </div>
    <div class="xyz-canvas"></div>
</div>
<style>
</style>