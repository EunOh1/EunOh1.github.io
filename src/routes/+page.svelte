<script>
    import { onMount } from 'svelte';

    let mainitem_data = [
        "/assets/balzac.glb",
        "/assets/misun.glb"
    ];

    onMount(() =>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    });
    

</script>
<svelte:head>
	<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
</svelte:head>
<!-- <h1>스벨트로 만들어보고 싶어요!</h1> -->
<div id="container">
<div class="mainitems">
    <model-viewer class="mainitem_1" src={mainitem_data[0]} poster="/assets/17-20.webp" camera-controls auto-rotate shadow-intensity="1"></model-viewer>
    <model-viewer class="mainitem_2" src={mainitem_data[1]} poster="/assets/17-19.webp" camera-controls auto-rotate shadow-intensity="1"></model-viewer>
</div>
</div>
<style>
@media only screen and (min-width: 1281px){
    #container {
        position: relative;
        top: 20vh;
        height: calc(100vh - 140px);
    }
    .mainitems{
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
        overflow: hidden;
        margin-top: -16px;
    }
    .mainitems model-viewer {
        display: flex;
        position: relative;
        height: 45vh;
        width: 45vh;
        overflow-x: hidden;
    }
    .mainitem_1 {
        display: flex;
        grid-column-start: 1;
    }
    .mainitem_2 {
        display: flex;
        grid-column-start: 2;
    } 
}
    @media only screen and (min-width: 320px) and (max-width: 767px) {
        #container{
        height: calc(100vh - 180px);
        }

        .mainitems{
        height: 100%;
        box-sizing: border-box;
        display:grid;
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
        margin-top: -16px;
    }
        .mainitems model-viewer {
        height: 40vh;
        width: 40vh;
        padding: 0 auto;
        overflow-x: hidden;
    }
        .mainitem_1 {
        margin-right: 0 ;
    }
        .mainitem_2 {
        display: none;
    }
    }

    @media only screen and (min-width: 320px) and (max-width: 767px) and (orientation:landscape){
        #container {
        height: calc(100vh - 100px);
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
    }
        .mainitems{
        height: 100%;
        box-sizing: border-box;
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
        margin-top: -16px;
    }
        .mainitems model-viewer {
        height: 40vh;
        width: 40vh;
        overflow-x: hidden;
    }
        .mainitem_1 {
        margin-right: 0 ;
    }
        .mainitem_2 {
        display: inherit;
        margin-left: 0;
    }
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px){
        #container {
        height: calc(100vh - 260px);
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
    }
        .mainitems{
        height: 100%;
        box-sizing: border-box;
        display:grid;
        grid-template-columns: repeat(1 , 1fr);
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
        margin-top: -16px;
    }
        .mainitems model-viewer {
        height: 440px;
        width: 440px;
        margin: 0 0 0 0;
        overflow-x: hidden;
    }
        .mainitem_1 {
        margin-right: 0 ;
    }
        .mainitem_2 {
            display: none;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation:landscape){
        #container {
        height: calc(100vh - 140px);
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
    }
        .mainitems{
        height: 100%;
        box-sizing: border-box;
        display:grid;
        grid-template-columns: repeat(2 , 1fr);
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
        margin-top: -16px;
    }
        .mainitems model-viewer {
        width: 40vh;
        height: 40vh;
        overflow-x: hidden;
    }
        .mainitem_1 {
        margin-right: 0 ;
    }
        .mainitem_2 {
        display: inherit;
        }
    }
    @media only screen and (min-width: 1025px) and (max-width: 1280px) and (orientation:landscape){
        #container {
        height: calc(100vh - 180px);
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
    }
        .mainitems{
        height: 100%;
        box-sizing: border-box;
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: minmax(auto);
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
        margin-top: -16px;
    }
        .mainitems model-viewer {
        height: 400px;
        width: 600px;
        margin: 0 0 0 0;
        overflow-x: hidden;
    }
        .mainitem_1 {
        margin-right: 0 ;
    }
    }
</style>
