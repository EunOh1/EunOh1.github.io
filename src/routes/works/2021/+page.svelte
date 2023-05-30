<script>
    import {fade, slide} from 'svelte/transition';
    // import { tick } from 'svelte';
    import "../+works_style.css";
    import {lazyLoad} from '../lazyload.js'

    let images_data = [
        {
            value: 0,
            src: "/assets/21-1.webp",
            txt: "21#1_2021_1600*550*670_polystyrene foam, resin, acrylic"
        },
        {
            value: 1,
            src: "/assets/21-2.webp",
            txt: "21#2_2021_1210*360*390_polystyrene foam, resin, acrylic"
        },
        {
            value: 2,
            src: "/assets/21-3.webp",
            txt: "21#3_2021_660*300*120_polystyrene foam, acrylic (from <Auto>)"
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
		    width:70%;
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
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, fit-content(100vh));
        padding: 2vh 0;
        align-items: center;
        justify-content: center;
        justify-items: center;
        gap: 1vh;
	}
/* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 1024px) {
    .column {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(1, fit-content(100vh));
    }
  }
  @media screen and (max-width: 915px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, fit-content(100vh));
    }
  }
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      justify-content: center;
      align-items: center;
      justify-items: center;
      height: 60vh;
    }
  }
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      justify-content: center;
      align-items: center;
      justify-items: center;
      height: 60vh;
    }
  }
</style>
