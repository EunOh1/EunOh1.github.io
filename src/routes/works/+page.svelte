<script>
    import {fade, slide} from 'svelte/transition';
    // import { tick } from 'svelte';
    import "./+works_style.css";

    let images_data = [
        {
            value: 0,
            src: "/assets/balzac.jpg",
            txt: "설명이거든???? 1"
        },
        {
            value: 1,
            src: "/assets/test2.jpg",
            txt: "설명이거든???? 2"
        },
        {
            value: 2,
            src: "/assets/misun.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 3,
            src: "/assets/chicken.jpg",
            txt: "설명이거든???? 4"

        },
        {
            value: 4,
            src: "/assets/dubuffet.jpg",
            txt: "설명이거든???? 5"
        },
        {
            value: 5,
            src: "/assets/index_image.jpg",
            txt: "설명이거든???? 6"
        },
        {
            value: 6,
            src: "/assets/head01.jpg",
            txt: "설명이거든???? 7"
        },
        {
            value: 7,
            src: "/assets/head02.jpg",
            txt: "설명이거든???? 8"
        },
        {
            value: 8,
            src: "/assets/head03.jpg",
            txt: "설명이거든???? 9"
        },
        {
            value: 9,
            src: "/assets/head04.jpg",
            txt: "설명이거든???? 10"
        },
        {
            value: 10,
            src: "/assets/head05.jpg",
            txt: "설명이거든???? 11"
        },
        {
            value: 11,
            src: "/assets/head06.jpg",
            txt: "설명이거든???? 12"
        }
    ];
    function laoadData(images_data){
        images_data.forEach(img => {    
        });
        return images_data;
    }
    let images = laoadData(images_data);
    
    function getImgValue(value){
         let srcc = images.filter(img => img.value == value)[0];
         return srcc.src;
    };
    
    function getTxtValue(value){
         let srcc = images.filter(img => img.value == value)[0];
         return srcc.txt;
    };

    let click;
	let clicked = click ? true : false;	


    let selected;
    let selectedTxt;


</script>
<!-- Header -->
<div class="header">
    <h1>반응형 그리드 너무 어렵잖아!!</h1>
    <p>장 난 해 ?</p>
  </div>

<!-- Photo Grid -->
<div class="row"> 
    <div class="column">
    {#each images_data.slice(0,5) as image, value}
        <img class='image' alt="what?" on:click={()=>{selected = getImgValue(value), selectedTxt = getTxtValue(value), clicked = !clicked;}} on:keydown={()=>{clicked = !clicked;}} src={image.src}> 
            {#if clicked}
                <div class="modal" transition:fade={{duration: 100}}>
	            <div on:click={()=>{clicked = !clicked}} on:keydown={()=>{clicked = !clicked}} class="close">x</div>
	            <div class="modal-image">
	                <img class="m-image" src={selected} alt="random img"/>
	            </div>
                <p class="text">{selectedTxt}</p>
                </div>
            {/if}
    {/each}
    </div>
    <div class="column">
    {#each images_data.slice(6,11) as image, value}
        <img class='image' alt="what?" on:click={()=>{selected = getImgValue(value + 6), selectedTxt = getTxtValue(value + 6), clicked = !clicked;}} on:keydown={()=>{clicked = !clicked;}} src={image.src}> 
            {#if clicked}
                <div class="modal" transition:fade={{duration: 100}}>
	            <div on:click={()=>{clicked = !clicked}} on:keydown={()=>{clicked = !clicked}} class="close">x</div>
	            <div class="modal-image">
	                <img class="m-image" src={selected} alt="random img"/>
	            </div>
                <p class="text">{selectedTxt}</p>
                </div>
            {/if}
    {/each}
    </div>  
    <div class="column">
        {#each images_data.slice(0,5) as img}
        <img src={img.src} alt="what?">
        {/each}
    </div>
    <div class="column">
        {#each images_data.slice(6,11) as img}
        <img src={img.src} alt="what?">
        {/each}
    </div>
  </div>
  <style>
    img:before {
    background:black;
    }
    .m-image{
        width:52%;      
        height:auto;    
    }
    .text {
        font-size: 1rem;
        position: relative;
        text-align: center;
        color: white;
    }
    .close {
        cursor: pointer;
        font-size: 2rem;
        position: absolute;
        right: 0;
        color: white;
        margin-right:1.5rem;
        top:0;
    }
    .image {
        cursor: pointer;
        width:100%;
        height: auto;
        max-width:400px;
        max-height:1000px;
        transition: 0.125s;
    }

    .image:hover {
        opacity: 0.7;
    }

    img:active {
        opacity: 0.5;
    }

    .modal-image {
        margin: 0 auto;
        display: block;
        width: 68%;
        max-width: 80%;
        text-align: center;	
    }
    .modal {
        position: fixed;
        z-index: 2;
        padding-top: 3%;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.9);
    }
</style>