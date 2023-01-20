<script>
    import {fade, slide} from 'svelte/transition';
    // import { tick } from 'svelte';
    import "../+works_style.css";
    import {lazyLoad} from '../lazyload.js'

    let images_data = [
        {
            value: 0,
            src: "/assets/22-1.webp",
            txt: "WH_2022_photogrammetry"
        },
        {
            value: 1,
            src: "/assets/22-2.webp",
            txt: "WP_2022_photogrammetry"
        },
        {
            value: 2,
            src: "/assets/22-3.webp",
            txt: "yongjun_2022_glb"
        },
        {
            value: 3,
            src: "/assets/22-4.webp",
            txt: "blownhead_2022_photogrammetry"

        },
        {
            value: 4,
            src: "/assets/22-5.webp",
            txt: "dubuffet_2022_photogrammetry"
        },
        {
            value: 5,
            src: "/assets/22-6.webp",
            txt: "head06_2022_glb"
        },
        {
            value: 6,
            src: "/assets/22-7.webp",
            txt: "head07_2022_glb"
        },
        {
            value: 7,
            src: "/assets/22-8.webp",
            txt: "headstower_2022_photogrammetry"
        },
        {
            value: 8,
            src: "/assets/22-9.webp",
            txt: "jinkyu_2022_glb"
        },
        {
            value: 9,
            src: "/assets/22-10.webp",
            txt: "kooning_2022_glb"
        },
        {
            value: 10,
            src: "/assets/22-11.webp",
            txt: "kooning02_2022_glb"
        },
        {
            value: 11,
            src: "/assets/22-12.webp",
            txt: "misun_2022_photogrammetry"
        },
        {
            value: 12,
            src: "/assets/22-13.webp",
            txt: "ryuin_2022_glb"
        },
        {
            value: 13,
            src: "/assets/22-14.webp",
            txt: "ufan_2022_photogrammetry"
        },
        {
            value: 14,
            src: "/assets/22-15.webp",
            txt: "pink_2022_photogrammetry"
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
<div class="header"></div>

<!-- Photo Grid -->
<div class="column">
    {#each images_data as image, value}
        <img class='image' alt="what?" on:click={()=>{selected = getImgValue(value), selectedTxt = getTxtValue(value), clicked = !clicked;}} on:keydown={()=>{clicked = !clicked;}} use:lazyLoad={image.src} decoding="async" loading='lazy'> 
        {/each}    
        {#if clicked}
                <div class="modal" transition:fade={{duration: 100}}>
	            <div on:click={()=>{clicked = !clicked}} on:keydown={()=>{clicked = !clicked}} class="close">x</div>
	            <div class="modal-image">
	                <img class="m-image" src={selected} alt="random img"/>
	            </div>
                <p class="caption">{selectedTxt}</p>
                </div>
            {/if}
</div>
<style>
    .image {
        display: flex;
        cursor: pointer;
		width:100%;
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
        grid-template-rows: repeat(4, fit-content(100vh));
        padding: 2vh 0;
        align-items: center;
        justify-content: center;
        justify-items: center;
        gap: 1vh;
	}
/* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 1024px) {
    .column {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, fit-content(100vh));
    }
  }
  @media screen and (max-width: 915px) {
    .column {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(5, fit-content(100vh));
    }
  }
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(8, fit-content(100vh));
    }
  }
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, fit-content(100vh));
    }
  }
</style>