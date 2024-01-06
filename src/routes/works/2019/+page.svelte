<script>
    import {fade, slide} from 'svelte/transition';
    // import { tick } from 'svelte';
    import "../+works_style.css";
    import {lazyLoad} from '../lazyload.js'

    let images_data = [
        {
            value: 0,
            src: "/assets/19-1.webp",
            txt: "19#1_2019_1260*570*190_resin, oil, polystyrene foam, steel, cement, epoxy"
        },
        {
            value: 1,
            src: "/assets/19-2.webp",
            txt: "19#2_2019_500*180*190_clay, oil, polystyrene foam, steel, resin, wood, acrylic"
        },
        {
            value: 2,
            src: "/assets/19-3.webp",
            txt: "19#3_2019_1440*300*320_resin, oil, polystyrene foam, steel, wood, acrylic"
        },
        {
            value: 3,
            src: "/assets/19-4.webp",
            txt: "19#4_2019_1660*400*400_resin, oil, polystyrene foam, steel"
        },
        {
            value: 4,
            src: "/assets/19-6.webp",
            txt: "19#6_2019_540*260*240_plaster"
        },
        {
            value: 5,
            src: "/assets/19-7.webp",
            txt: "19#7_2019_610*500_oil on canvas"
        },
        {
            value: 6,
            src: "/assets/19-10.webp",
            txt: "19#10_2019_430*250*280_plaster"
        },
        {
            value: 7,
            src: "/assets/19-13.webp",
            txt: "19#13_2019_520*300*250_plaster"
        },
        {
            value: 8,
            src: "/assets/19-15.webp",
            txt: "19#15_2019_1615*1305*30_acrylic, oil on hemp"
        },
        {
            value: 9,
            src: "/assets/19-16.webp",
            txt: "19#16_2019_305*430*80_polystyrene foam, plaster, paperclay"
        },
        {
            value: 10,
            src: "/assets/19-19.webp",
            txt: "19#19_2019_320*190*260_plaster"
        },
        {
            value: 11,
            src: "/assets/19-20.webp",
            txt: "19#20_2019_310*170*180_plaster"
        },
        {
            value: 12,
            src: "/assets/19-21.webp",
            txt: "19#21_2019_280*160*240_plaster"
        },
        {
            value: 13,
            src: "/assets/19-23.webp",
            txt: "19#23_2019_420*330*330_polystyrene foam, resin, acrylic"
        },
        {
            value: 14,
            src: "/assets/19-24.webp",
            txt: "19#24_2019_360*190*280_plaster"
        },
        {
            value: 15,
            src: "/assets/19-25.webp",
            txt: "19#25_2019_490*300*280_plaster"
        },
        {
            value: 16,
            src: "/assets/19-26.webp",
            txt: "19#26_2019_340*200*280_plaster"
        },
        {
            value: 17,
            src: "/assets/19-27.webp",
            txt: "19#27_2019_1450*1115_resin, acrylic, oil on canvas"
        },
        {
            value: 18,
            src: "/assets/19-28.webp",
            txt: "19#28_2019_1540*350*240_steel, resin, polystyrene foam, epoxy"
        },
        {
            value: 19,
            src: "/assets/19-29.webp",
            txt: "19#29_2019_870*300*200_plaster"
        },
        {
            value: 20,
            src: "/assets/19-32.webp",
            txt: "19#32_2019_510*240*240_polystyrene foam, oilclay, epoxy"
        },
        {
            value: 21,
            src: "/assets/19-33.webp",
            txt: "19#33_2019_1730*1080*410_polystyene foam, resin"
        },
        {
            value: 22,
            src: "/assets/19-34.webp",
            txt: "19#34_2019_1840*600*510_polystyene foam, resin"
        },
        {
            value: 23,
            src: "/assets/19-35.webp",
            txt: "19#35_2019_1020*580*380_polystyene foam, resin"
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
        grid-template-rows: repeat(6, fit-content(100vh));
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
        grid-template-rows: repeat(6, fit-content(100vh));
    }
}
@media screen and (max-width: 915px) {
    .column {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(6, fit-content(100vh));
    }
}
  /* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
    .column {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(12, fit-content(100vh));
    }
}
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
    .column {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(12, fit-content(100vh));
    }
}
</style>
