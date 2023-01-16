<script>
    import {fade, slide} from 'svelte/transition';
    // import { tick } from 'svelte';
    import "../+works_style.css";

    let images_data = [
        {
            value: 0,
            src: "/assets/s-15-1.jpg",
            txt: "s-15-1_2015_727*550_putty, acrylic, UV print, wood panel"
        },
        {
            value: 1,
            src: "/assets/s-15-2-10.jpg",
            txt: "s-15-2~10_2015_300*300*25(each)_acrylic, digital print"
        },
        {
            value: 2,
            src: "/assets/s-15-11.jpg",
            txt: "s-15-11_2015_220*273*25_wood panel, curtain lace, acrylic"
        },
        {
            value: 3,
            src: "/assets/s-15-12.jpg",
            txt: "s-15-12_2015_1500*1000*30_woodpanel, Putty, urethane varnish"
        },
        {
            value: 4,
            src: "/assets/s-15-13.jpg",
            txt: "s-15-13_2015_415*860*10_gesso, UV print on acrylic board(found objet)"
        },
        {
            value: 5,
            src: "/assets/s-15-14.jpg",
            txt: "s-15-14_2015_330*440*40_putty, UV print on styrofoam(found objet)"
        },
        {
            value: 6,
            src: "/assets/s-15-15.jpg",
            txt: "s-15-15_2015_810*560*20_UV print on frame(found objet)"
        },
        {
            value: 7,
            src: "/assets/s-15-16.jpg",
            txt: "s-15-16_2015_400*400*60_oil and watercolor on styrofoam, putty, epoxy"
        },
        {
            value: 8,
            src: "/assets/s-15-33.jpg",
            txt: "s-15-33_2015_440*650*150_linen, polystyrene foam, stretcher, acrylic"
        },
        {
            value: 9,
            src: "/assets/s-15-34.jpg",
            txt: "s-15-34_2015_710*1100*80_linen, stretcher, acrylic"
        },
        {
            value: 10,
            src: "/assets/s-15-35.jpg",
            txt: "s-15-35_2015_660*380*50_linen, stretcher, gluegun, acrylic"
        },
        {
            value: 11,
            src: "/assets/s-15-36-8.jpg",
            txt: "s-15-36~8_2015_360*360*80, 520*680*80, 680*820*80_linen, acrylic"
        },
        {
            value: 12,
            src: "/assets/s-15-42.jpeg",
            txt: "s-15-42_2015_100*50*250_acrylic, digital print, polystyrene foam"
        },
        {
            value: 13,
            src: "/assets/s-15-44.jpg",
            txt: "s-15-44_2015_400*400*450_polystyrene foam, acrylic"
        },
        {
            value: 14,
            src: "/assets/s-15-45.jpeg",
            txt: "s-15-45_2015_300*530*30_acrylic, korean paper, woodpanel"
        },
        {
            value: 15,
            src: "/assets/s-15-47.jpg",
            txt: "s-15-47_2015_550*750*40_wood(found objet), UV print"
        },
        {
            value: 16,
            src: "/assets/s-15-48.jpg",
            txt: "s-15-48_2015_550*750*40_wood(found objeet), UV print"
        },
        {
            value: 17,
            src: "/assets/s-15-49.jpg",
            txt: "s-15-49_2015_320*450*40_polystyrene foam(found objet), putty, UV print"
        },
        {
            value: 18,
            src: "/assets/s-15-50.jpg",
            txt: "s-15-50_2015_600*800*200_polystyrene foam, stretcher, acrylic"
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
        <img class='image' alt="what?" on:click={()=>{selected = getImgValue(value), selectedTxt = getTxtValue(value), clicked = !clicked;}} on:keydown={()=>{clicked = !clicked;}} src={image.src} loading='lazy'> 
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
		width:100%;
        height: auto;
		max-width:360px;
	    max-height:800px;
        padding: 0 0vw 0 0vw;
    }
/* Create four equal columns that sits next to each other */
    .column {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, fit-content(100vh));
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
      grid-template-rows: repeat(5, fit-content(100vh));
    }
  }
  @media screen and (max-width: 915px) {
    .column {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(5, fit-content(100vh));
    }
  }
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(10, fit-content(100vh));
    }
  }
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, fit-content(100vh));
    }
  }
</style>
