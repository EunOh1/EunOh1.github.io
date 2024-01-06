<script>
    import {fade, slide} from 'svelte/transition';
    import { tick } from 'svelte';
    import { onMount } from "svelte";
    import "../+works_style.css";
    import {lazyLoad} from '../lazyload.js'

    let images_data = [
        {
            value: 0,
            src: "/assets/s-14-1.webp",
            txt: "s-14-1_2014_1650*1300*250_fabric products"
        },
        {
            value: 1,
            src: "/assets/s-14-2.webp",
            txt: "s-14-2_2014_1622*1303*25_pigment print on canvas"
        },
        {
            value: 2,
            src: "/assets/s-14-3-8.webp",
            txt: "s-14-3~8_2014_500*650*25(each)_putty, UV print on woodpanel"
        },
        {
            value: 3,
            src: "/assets/s-14-9.webp",
            txt: "s-14-9_2014_530*300*30_acrylic, pigment print on canvas"
        },
        {
            value: 4,
            src: "/assets/s-14-10.webp",
            txt: "s-14-10_2014_170*180*222_3d Print"
        },
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

    let innerH = 500;
    onMount(async()=>{
        let header = document.querySelector('header').getBoundingClientRect().height;
        let innerMenu = document.querySelector('.worksnav').getBoundingClientRect().height;
        let footer = document.querySelector('footer').getBoundingClientRect().height;

        await tick();
            innerH = window.innerHeight - header - innerMenu - footer -1;

            console.log(innerH)

        window.addEventListener('resize', async ()=>{
            await tick();
            innerH = window.innerHeight - header - innerMenu - footer -1;
        })
    });

</script>
<!-- Header -->
<div class="header"></div>

<!-- Photo Grid -->
<div class="grid-container" style="height: {innerH}px;">
<div class="column">
    {#each images_data as image, value}
        <img class='image' alt="what?" on:click={()=>{selected = getImgValue(value), selectedTxt = getTxtValue(value), clicked = !clicked;}} on:keydown={()=>{clicked = !clicked;}} use:lazyLoad={image.src} decoding="async" loading='lazy'> 
        {/each}    
          {#if clicked}
                <div class="modal" transition:fade|global={{duration: 100}}>
	            <div on:click={()=>{clicked = !clicked}} on:keydown={()=>{clicked = !clicked}} class="close">x</div>
	            <div class="modal-image">
	                <img class="m-image" src={selected} alt="random img"/>
	            </div>
                <p class="caption">{selectedTxt}</p>
                </div>
            {/if}
</div>
</div>
<style>
    .grid-container{
        margin: 0 1vw;
    }
    .image {
        display: flex;
        cursor: pointer;
	    	width:80%;
        height: auto;
	    	max-width:360px;
	      max-height:800px;
        padding: 0 0 0 0;
        opacity: 0;
		    transition: all 2s ease;
    }
/* Create four equal columns that sits next to each other */
    .column {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, fit-content(100vh));
        gap: 1vh;
        padding: 2vh 0;
        align-items: center;
        justify-content: center;
        justify-items: center;
	}
/* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 1024px) {
    .column {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, fit-content(100vh));
    }
  }
  @media screen and (max-width: 915px) {
    .column {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, fit-content(100vh));
    }
  }
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, fit-content(100vh));
    }
  }
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, fit-content(100vh));
    }
  }
</style>
