<script>
    import { onMount } from 'svelte';    
    import viewerApp from './viewerapp.js';
    import "./+viewer_style.css";
    import workDb from './models.js';
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

    enterCounter.subscribe((value)=>{
        enterCount = value;
    })

    const handleClick = (e) => {
        activeTabValue = e.target.dataset.num !== null && e.target.dataset.num !== undefined ? Number(e.target.dataset.num) : activeTabValue;
        curr = activeTabValue;
    };

    const naviClick = (e) => {
        if(e.target.innerHTML === 'navigate_before'){
            if(activeTabValue > 0 && activeTabValue <= workDb.length -1){
                activeTabValue = curr - 1;
                curr --;
            }else if(curr === 0){
                console.log('first~~')
            } 
        }else if(e.target.innerHTML === 'navigate_next'){
            if(activeTabValue >= 0 && activeTabValue <= workDb.length -2){
                activeTabValue = curr + 1;
                curr++;
            }else if(curr === workDb.length -1){
                console.log('is last')
            } 
        }
    }

    onMount(async () => { 
        await hiding();
        viewerApp();
    });      

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

</script>
<div class="gui-main-3d">      
    <div class="gui-wrapper-3d">

        <div class="top-3d">
            <a on:click={()=> {
                    delCache(); 
                    counting();
                    localStorage.removeItem('selected');
                }} href="/works/2023"><span class="material-icons-outlined">clear</span></a>
        </div>

        <div class="mid-3d {clicked === true ? 'mid-change' : ''}">
            <div class="mid-left-3d">       
                <span class="material-icons-outlined" on:click={(e)=>{naviClick(e); } } on:keydown={(e)=>naviClick(e)}>navigate_before</span>
            </div>
            <div class="mid-right-3d">
                <span class="material-icons-outlined" on:click={(e)=>{ naviClick(e); } } on:keydown={(e)=>naviClick(e)}>navigate_next</span>
            </div>
        </div>

        <div class="mid-info {clicked === true ? 'active' : ''}">
            <svelte:element this='p'>{workDb[activeTabValue].title}</svelte:element>
            <svelte:element this='p'>{workDb[activeTabValue].author}</svelte:element>
            <svelte:element this='p'>{workDb[activeTabValue].year}</svelte:element>
            <svelte:element this='p'>{workDb[activeTabValue].size}</svelte:element>
            <svelte:element this='p'>{workDb[activeTabValue].material}</svelte:element>                
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