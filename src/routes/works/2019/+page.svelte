<script>
    import {fade, slide} from 'svelte/transition';
    // import { tick } from 'svelte';
    import "../+works_style.css";

    let images_data = [
        {
            value: 0,
            src: "/assets/19-1.jpg",
            txt: "설명이거든???? 1"
        },
        {
            value: 1,
            src: "/assets/19-2.jpg",
            txt: "설명이거든???? 2"
        },
        {
            value: 2,
            src: "/assets/19-3.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 3,
            src: "/assets/19-4.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 4,
            src: "/assets/19-6.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 5,
            src: "/assets/19-7.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 6,
            src: "/assets/19-10.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 7,
            src: "/assets/19-13.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 8,
            src: "/assets/19-15.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 9,
            src: "/assets/19-16.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 10,
            src: "/assets/19-19.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 11,
            src: "/assets/19-20.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 12,
            src: "/assets/19-21.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 13,
            src: "/assets/19-23.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 14,
            src: "/assets/19-24.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 15,
            src: "/assets/19-25.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 16,
            src: "/assets/19-26.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 17,
            src: "/assets/19-27.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 18,
            src: "/assets/19-28.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 19,
            src: "/assets/19-29.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 20,
            src: "/assets/19-32.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 21,
            src: "/assets/19-33.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 22,
            src: "/assets/19-34.jpg",
            txt: "설명이거든???? 3"
        },
        {
            value: 23,
            src: "/assets/19-35.jpg",
            txt: "설명이거든???? 3"
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
                <p class="text">{selectedTxt}</p>
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
        grid-template-rows: repeat(6, 1fr);
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
        grid-template-rows: repeat(6, 1fr);
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
      grid-template-rows: repeat(6, 1fr);
    }
  }
  @media screen and (max-width: 915px) {
    .column {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(6, 1fr);
    }
  }
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(12, 1fr);
    }
  }
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(12, 1fr);
    }
  }
</style>
