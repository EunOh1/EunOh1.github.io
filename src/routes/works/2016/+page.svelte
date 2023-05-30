<script>
    import {fade, slide} from 'svelte/transition';
    // import { tick } from 'svelte';
    import "../+works_style.css";
    import {lazyLoad} from '../lazyload.js'

    let images_data = [
        {
            value: 0,
            src: "/assets/s-16-2.webp",
            txt: "s-16-2_2016_650*880*100_gesso, pencil, polystyrene foam, putty"
        },
        {
            value: 1,
            src: "/assets/s-16-3.webp",
            txt: "s-16-3_2016_440*440*240_acrylic, polystyrene foam, polyurethane foam"
        },
        {
            value: 2,
            src: "/assets/s-16-5.webp",
            txt: "s-16-5_2016_140*570*150_wood, acrylic"
        },
        {
            value: 3,
            src: "/assets/s-16-6.webp",
            txt: "s-16-6_2016_600*600*20_acrylic on linen, korean paper"
        },
        {
            value: 4,
            src: "/assets/s-16-8.webp",
            txt: "s-16-8_2016_900*900*180_polystyrene foam, acrylic, putty"
        },
        {
            value: 5,
            src: "/assets/s-16-9.webp",
            txt: "s-16-9_2016_300*300*1000_polystyrene foam, putty, acrylic, wood"
        },
        {
            value: 6,
            src: "/assets/s-16-10.webp",
            txt: "s-16-10_2016_300*700*250_polystyrene foam, putty"
        },
        {
            value: 7,
            src: "/assets/s-16-11.webp",
            txt: "s-16-11_2016_528*728*100_acrylic on hemp cloth and korean paper"
        },
        {
            value: 8,
            src: "/assets/s-16-12.webp",
            txt: "s-16-12_2016_410*410*80_resin, clay, polysterene foam, ink"
        },
        {
            value: 9,
            src: "/assets/s-16-13.webp",
            txt: "s-16-13_2016_1170*940*140_wood, resin, acrylic, polystyrene foam"
        },
        {
            value: 10,
            src: "/assets/s-16-14.webp",
            txt: "s-16-14-2016_1220*250*350_paper clay, polysterene foam"
        },
        {
            value: 11,
            src: "/assets/s-16-15.webp",
            txt: "s-16-15_2016_1220x1020x400_resin, acrylic, polystyrene foam, silicone"
        },
        {
            value: 12,
            src: "/assets/s-16-18.webp",
            txt: "s-16-18_2016_1460*280*320_wood, acrylic, resin, polysterene foam, clay"
        },
        {
            value: 13,
            src: "/assets/s-16-19.webp",
            txt: "s-16-19_2016_820*630*310_clay, polystrene foam, epoxy"
        },
        {
            value: 14,
            src: "/assets/s-16-21.webp",
            txt: "s-16-21_2016_840*440*270_polystrene foam, wood, ink, cement"
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
