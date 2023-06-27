<script>
    import { onMount } from 'svelte';    
    import viewerApp from './viewerapp.js';
    import "./+viewer_style.css";
    import workDb from './models.js';
    import { page } from '$app/stores'
    import { goto } from '$app/navigation';
    import { enterCounter, selected } from '../store.js'
    
    let click;
    let clicked = click ? true : false;	
    let activeTabValue = new Number(0);
    let curr = new Number(0);
    let enterCount = new Number(0);
    let selectedNow = 0;

    selected.subscribe((value)=>{
        selectedNow = value;
    });

    onMount(async () => { 
        let num = $page.url.searchParams.get('num');

        if(num === NaN || num === null){
            selected.set(0);
            num = 0;
        }else if(num !== null && num > workDb.length -1){
            selected.set(workDb.length -1);
        }else if(num !== null && num <= workDb.length -1){
            selected.set(parseInt(num));
        }
        await setParam(parseInt(num));
        await hiding();
        await viewerApp();
    });   

    enterCounter.subscribe((value)=>{
        enterCount = value;
    });

    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    };

    const handleClick = (e) => {
        activeTabValue = e.target.dataset.num !== null && e.target.dataset.num !== undefined ? Number(e.target.dataset.num) : activeTabValue;
        curr = activeTabValue;
        setParam(activeTabValue);
    };

    const naviClick = (e) => {
        if(e.target.innerHTML === 'navigate_before'){
            if(activeTabValue > 0 && activeTabValue <= workDb.length -1){
                activeTabValue = curr - 1;
                curr --;
                setParam(activeTabValue);
            }else if(curr === 0){
                console.log('first~~')
            } 
        }else if(e.target.innerHTML === 'navigate_next'){
            if(activeTabValue >= 0 && activeTabValue <= workDb.length -2){
                activeTabValue = curr + 1;
                setParam(activeTabValue);
                curr++;
            }else if(curr === workDb.length -1){
                console.log('is last')
            } 
        }
    }

    async function hiding(){
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';  
    }

    function scrollStart(){
        let center = window.innerWidth / 2
        const swipeAll = document.querySelectorAll('.gui-swipe-each');
        let rect = swipeAll[selectedNow].getBoundingClientRect();
        scrollSmoothly(rect.left - center, 0)
    }

    function scrollSmoothly(x, y) {
        const swipe = document.querySelector('.gui-swipe-3d');
        const startTime = performance.now();
        const duration = 300; 
        const startX = swipe.scrollLeft;
        const startY = swipe.scrollTop;

        function animate(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // 0부터 1까지의 진행 상황
        
            swipe.scrollTo(startX + x * progress, startY + y * progress);
        
            if (elapsedTime < duration) {
            requestAnimationFrame(animate); // 다음 프레임 요청
            }
        }
        requestAnimationFrame(animate); // 첫 번째 프레임 요청
    }

    function delCache(){
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                return caches.delete(key);
            }));
        });
        // console.log('캐시삭제완료')
    };

    function counting() {
        if(enterCount >= 5){
            enterCounter.set(0)
        }else{
            enterCounter.update(n => n + 1);
        }
    };

    async function setParam(param){
        if(param === NaN || param === null){
            return goto(`?num=0`, { replaceState: true });
        }
        return goto(`?num=${[param]}`, { replaceState: true });
    }

    function share(){
        if(window.innerWidth > 575 && !isMobile()){
            window.navigator.clipboard.writeText(window.location.href);
            console.log('desktop');
        }else if(window.innerWidth <= 575 || isMobile()){
            console.log('mobile');
            /** ==== when mobile auto open share api ==== */
            if (navigator.share) {
                navigator.share({
                    title: 'works-viewer',
                    text: "EunOh's works-viewer",
                    url: window.location.href,
                }).then(() => {
                    console.log('Thanks for sharing!');
                })
                .catch(console.error);
            } else {
                /** ==== when desktop write Url to clipbaord ==== */
                window.navigator.clipboard.writeText(window.location.href);
            }
        }
        const guiTop = document.querySelector('.gui-main-3d');
        let copied = document.createElement('div');
            copied.setAttribute('class', 'xyz-copied');
            copied.innerText = 'URL Copied!';
        guiTop.insertAdjacentElement('afterbegin', copied);

        let timer = setTimeout(()=>{
            copied.remove();
            clearTimeout(timer);
        },700)
    }

</script>
<div class="gui-main-3d">      
    <div class="gui-wrapper-3d">

        <div class="top-3d">
            <span class="material-icons-outlined xyz-share" on:click={()=>{share()}} on:keydown={()=>{share()}}>share</span>
            <a on:click={()=> {
                    delCache(); 
                    counting();
                    // localStorage.removeItem('selected');
                }} href="/works/2023"><span class="material-icons-outlined">clear</span></a>
        </div>

        <div class="mid-3d {clicked === true ? 'mid-change' : ''}">
            <div class="mid-left-3d">       
                <span class="material-icons-outlined" on:click={(e)=>{ naviClick(e); }} on:keydown={(e)=>{naviClick(e)}}>navigate_before</span>
            </div>
            <div class="mid-right-3d">
                <span class="material-icons-outlined" on:click={(e)=>{ naviClick(e); }} on:keydown={(e)=>{naviClick(e)}}>navigate_next</span>
            </div>
        </div>

        <div class="mid-info {clicked === true ? 'active' : ''}">
            <svelte:element this='p'>{workDb[selectedNow].title}</svelte:element>
            <svelte:element this='p'>{workDb[selectedNow].author}</svelte:element>
            <svelte:element this='p'>{workDb[selectedNow].year}</svelte:element>
            <svelte:element this='p'>{workDb[selectedNow].size}</svelte:element>
            <svelte:element this='p'>{workDb[selectedNow].material}</svelte:element>                
        </div>
        

        <div class="btm-3d">
            <div class="btm-left-3d">
                <span class="material-icons-outlined less" on:click={()=>scrollStart()} on:keydown={()=> scrollStart()}>expand_less</span>   
                <span class="material-icons-outlined que" 
                    on:click={(e)=> {
                        !clicked ? e.currentTarget.style.color = "#ff6666" : e.currentTarget.style.color = "black";
                        clicked = !clicked;
                    }} 
                    on:keydown={()=> clicked = !clicked}>question_mark</span>         
            </div>
            <div class="btm-right-3d">
                <span class="material-icons-outlined xyzon">360</span>
                <span class="material-icons-outlined xyzright xyzon">wb_sunny</span>
                <span class="material-icons-outlined xyzright">wb_iridescent</span>
                <span class="material-icons-outlined xyzright">lightbulb</span>
                <span class="material-icons-outlined xyzright">highlight</span>
                <div class="btm-right-control">
                    <span class="material-icons-outlined">arrow_upward</span>
                    <span class="material-icons-outlined">arrow_downward</span>
                    <span class="material-icons-outlined">arrow_back</span>
                    <span class="material-icons-outlined">arrow_forward</span>
                </div>
            </div>
        </div>
    
        <div class="gui-swipe-3d xyzhide" on:click={(e)=>handleClick(e)} on:keydown={(e)=>handleClick(e)}></div>

    </div>
    <div class="xyz-canvas"></div>
</div>
<style>
</style>