<script>
    import {fade, slide} from 'svelte/transition';
    // import { tick } from 'svelte';
    import "../+works_style.css";

    let images_data = [
        {
            value: 0,
            src: "/assets/17-4.jpg",
            txt: "17#4_2017_535*220*250_plaster, watercolor, acrylic"
        },
        {
            value: 1,
            src: "/assets/17-5.jpg",
            txt: "17#5_2017_770*240*230_cement, wood, epoxy, clay, polystyrene foam"
        },
        {
            value: 2,
            src: "/assets/17-6-9.jpg",
            txt: "17#6~9_2017_530*300*30(each)_oil, acrylic, woodpanel, hemp"
        },
        {
            value: 3,
            src: "/assets/17-11.jpg",
            txt: "17#11_2017_1000*990*580_steel, polystrene foam, resin"
        },
        {
            value: 4,
            src: "/assets/17-16.jpg",
            txt: "17#16_2017_1370*420*360_steel, cement, epoxy, polystrene foam, resin"
        },
        {
            value: 5,
            src: "/assets/17-18.jpg",
            txt: "17#18_2017_350*160*200_clay, wood, acrylic"
        },
        {
            value: 6,
            src: "/assets/17-19.jpg",
            txt: "17#19_2017_310*160*200_clay, wood, acrylic"
        },
        {
            value: 7,
            src: "/assets/17-20.jpg",
            txt: "17#20_2017_500*260*240_clay, wood, steel, polystyrene foam, acrylic"
        },
        {
            value: 8,
            src: "/assets/17-21.jpg",
            txt: "17#21_2017_590*350*330_clay, epoxy, steel, wood, acrylic"
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
        <img class='image' alt="what?" on:click={()=>{selected = getImgValue(value), selectedTxt = getTxtValue(value), clicked = !clicked;}} on:keydown={()=>{clicked = !clicked;}} src={image.src}> 
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
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        cursor: pointer;
		width:100%;
        height: auto;
		max-width:360px;
	    max-height:800px;
        padding: 0 1vw 0 1vw;
        gap: 2vh;
        }
/* Create four equal columns that sits next to each other */
    .column {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 2vh;
        padding: 2vh 0;
        align-items: center;
        justify-content: center;
        justify-items: center;
        cursor: pointer;
	}
/* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 1024px) {
    .column {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 915px) {
    .column {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
  }
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }
  }
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    }
  }
</style>
