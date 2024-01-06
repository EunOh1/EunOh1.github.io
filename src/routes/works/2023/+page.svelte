<script>
    import { fade } from 'svelte/transition';
    import { onMount } from "svelte";
    import { tick } from 'svelte';
    import "../+works_style.css";
    import { enterCounter } from '../../store.js'

    let enterCount = new Number(0);
    enterCounter.subscribe((value)=>{
        enterCount = value;
    });

    let items = [
        {
            label: "src",
            value: 1,
            href: "https://xr.screenxyz.net/src",
            target: false
        },
        {
            label: "works-viewer",
            value: 2,
            href: "/works-viewer",
            target: false
		},
        {
            label: "sonny",
            value: 3,
            href: "/sonnyinfo",
            target: false
        },
        {
            label: "korea",
            value: 4,
            href: "/korea",
            target: false
        }
    ];

    let innerH = 500;
    onMount(async()=>{
        delCache();
        if(enterCount >= 1) window.location.reload()
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

    function delCache(){
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                return caches.delete(key);
            }));
        });
        // console.log('캐시삭제완료')
    }
    
</script>
<!-- Header -->
<div class="header">
</div>

<div class="min-main" style="height:{innerH}px">
    <div class="column" transition:fade|global={{duration: 300}}>
        {#each items as item} 
        <a href={item.href} target={item.target ? "_blank" : "_self"} on:click={()=>delCache()}>
            <div class="image">
                    <h3 class="nope">{item.label}</h3>
            </div>
        </a>
        {/each}
    </div>
</div>
<!-- <a href={item.href}><h3 class="nope">아직 없어요 {':)'}</h3></a> -->
<style>   
    a{
        text-decoration: none;
        color: black;
    }
    a:visited {
        color: black;
        text-decoration: none;
        transition: all 0.2s linear;
    }
    a:hover{
        color: rgb(255, 100, 100);
        /* background-color: #fff; */
        transition: all 0.2s linear;
    }
    .nope{
        margin: 0;
    }
    .image {
        display: flex;
        cursor: pointer;
		width: 8.5rem;
        height: 8.5rem;
        /* height: auto; */
		max-width:360px;
        max-height:800px;
        border: 1px solid #6e6e6e;
        padding: 0 0 0 0;
        /* opacity: 0; */
        justify-content: center;
        align-items: center;
		transition: all 0.2s linear;
    }
    .image:hover, a:active, a:visited{
        outline: 1.2px solid #6e6e6e;
        outline-offset: 2px;
        opacity: 1;
    }
/* Create four equal columns that sits next to each other */
    .column {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        /* grid-template-rows: repeat(4, fit-content(100vh)); */
        align-items: center;
        justify-content: center;
        justify-items: center;
        gap: 1vh 0.5vh;
	}
    .min-main{
        width: 100vw;
        box-sizing: border-box;
        padding: 2vh 0;
    }
/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 1024px) {
    .column {
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(1, 1fr);
        justify-items: flex-start;
        padding-left: 2vw;
    }
    .image {
        width: 7rem;
        height: 7rem;
        font-size: 0.7rem;
    }
}
@media screen and (max-width: 915px) {
    .column {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(1, 1fr);
        justify-items: flex-start;
        padding-left: 2vw;
    }
    .image {
        width: 7rem;
        height: 7rem;
        font-size: 0.9rem;
    }
}
  /* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
    .column {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1, 1fr);
        justify-items: flex-start;
        padding-left: 2vw;
    }
    .image {
        width: 7rem;
        height: 7rem;
        font-size: 0.9rem;
    }
}
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
    .column {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);
    }
    .image {
        width: 7rem;
        height: 7rem;
        font-size: 0.9rem;
    }
    .nope{
        font-size: 1rem;
    }
}
@media screen and (max-width: 475px) {
    .nope{
        font-size: 0.7rem;
    }
}
    
</style>