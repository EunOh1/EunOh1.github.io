<script>
    import {fade, slide} from 'svelte/transition';
    // import { tick } from 'svelte';
    import "../+works_style.css";
    import {lazyLoad} from '../lazyload.js'

    let images_data = [
        {
            value: 0,
            src: "/assets/18-1.webp",
            txt: "18#1_2018_1650*390*370_steel, cement, epoxy, polystrene foam, resin"
        },
        {
            value: 1,
            src: "/assets/18-2.webp",
            txt: "18#2_2018_1700*500*300_steel, cement, epoxy, polystrene foam, resin"
        },
        {
            value: 2,
            src: "/assets/18-3.webp",
            txt: "18#3_2018_500*270*180_clay, wood, polystrene foam, acrylic"
        },
        {
            value: 3,
            src: "/assets/18-4.webp",
            txt: "18#4_2018_450*250*160_clay, wood, polystrene foam, acrylic"
        },
        {
            value: 4,
            src: "/assets/18-5.webp",
            txt: "18#5_2018_550*380*230_clay, polystrene foam, acrylic"
        },
        {
            value: 5,
            src: "/assets/18-6.webp",
            txt: "18#6_2018_1460*380*380_steel, cement, epoxy, resin"
        },
        {
            value: 6,
            src: "/assets/18-7.webp",
            txt: "18#7_2018_560*460*220_steel, resin, ink"
        },
        {
            value: 7,
            src: "/assets/18-8.webp",
            txt: "18#8_2018_1630*270*260_polystrene foam, resin"
        },
        {
            value: 8,
            src: "/assets/18-9.webp",
            txt: "18#9_2018_1620*1080*80_resin on cotton, wood"
        },
        {
            value: 9,
            src: "/assets/18-10.webp",
            txt: "18#10_2018_600*900*130_polystrene foam, resin, wood"
        },
        {
            value: 10,
            src: "/assets/18-11.webp",
            txt: "18#11_2018_510*240*260_clay, wood, steel, polystyrene foam"
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
                <div class="modal" transition:fade={{duration: 100}}>
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
        grid-template-rows: repeat(3, fit-content(100vh));
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
      grid-template-rows: repeat(3, fit-content(100vh));
    }
  }
  @media screen and (max-width: 915px) {
    .column {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, fit-content(100vh));
    }
  }
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, fit-content(100vh));
    }
  }
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, fit-content(100vh));
    }
  }
</style>
