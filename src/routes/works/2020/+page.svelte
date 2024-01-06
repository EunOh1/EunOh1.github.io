<script>
    import {fade, slide} from 'svelte/transition';
    // import { tick } from 'svelte';
    import "../+works_style.css";
    import {lazyLoad} from '../lazyload.js'

    let images_data = [
        {
            value: 0,
            src: "/assets/20-3.webp",
            txt: "20#3_2020_920*300*300_polystyrene foam, acrylic"
        },
        {
            value: 1,
            src: "/assets/20-4.webp",
            txt: "20#4_2020_900*620*400_polystyrene foam, acrylic"
        },
        {
            value: 2,
            src: "/assets/20-5.webp",
            txt: "20#5_2020_470*560*460_polystyrene foam, acrylic, laquer, resin"
        },
        {
            value: 3,
            src: "/assets/20-6.webp",
            txt: "20#6_2020_550*800*400_polystyrene foam, laquer"
        },
        {
            value: 4,
            src: "/assets/20-7.webp",
            txt: "20#7_2020_520*210*140_polystyrene foam, urethane"
        },
        {
            value: 5,
            src: "/assets/20-8.webp",
            txt: "20#8_2020_1820*250*300_polystyrene foam, acrylic"
        },
        {
            value: 6,
            src: "/assets/20-11.webp",
            txt: "20#11_2020_910*400*160_polystyrene foam, wood, cement, oil"
        },
        {
            value: 7,
            src: "/assets/20-12.webp",
            txt: "20#12_2020_870*410*120_polystyrene foam, wood, oil, acrylic"
        },
        {
            value: 8,
            src: "/assets/20-13.webp",
            txt: "20#13_2020_780*290*120_polystyrene foam, wood, oil, acrylic"
        },
        {
            value: 9,
            src: "/assets/20-14.webp",
            txt: "20#14_2020_1000*900*140_polystyrene foam, stretcher, epoxy"
        },
        {
            value: 10,
            src: "/assets/20-15.webp",
            txt: "20#15_2020_1100*900*140_polystyrene foam, stretcher, epoxy"
        },
        {
            value: 11,
            src: "/assets/20-17.webp",
            txt: "20#17_2020_1800*820*440_polystyrene foam, resin, clay, epoxy, iron"
        },
        {
            value: 12,
            src: "/assets/20-18.webp",
            txt: "20#18_2020_660*500_paper, oil on canvas"
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

</script>
<!-- Header -->
<div class="header"></div>

<!-- Photo Grid -->
<div class="grid-container">
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
		width: 90%;
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
      grid-template-rows: repeat(4, fit-content(100vh));
    }
  }
  @media screen and (max-width: 915px) {
    .column {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, fit-content(100vh));
    }
  }
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(7, fit-content(100vh));
    }
  }
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, fit-content(100vh));
    }
  }
</style>
