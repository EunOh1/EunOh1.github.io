<script>
    // import { txts_data } from "./txt_data.js";
    import { onMount } from 'svelte'; 
    import { tick } from 'svelte';
    import { activeTabValue } from '../store.js';
    export let data;

    // modify store.js
    // let activeTabValue = 0;
    let innerH;
    let selNum;
    activeTabValue.subscribe((value)=>{
        console.log(value)
        selNum = value;
    })
    onMount(async () => { 
        innerH = 500;
        let header = document.querySelector('header').getBoundingClientRect().height;
        let lowSelector = document.querySelector('.numbering').getBoundingClientRect().height;
        let back = document.querySelector('.back').getBoundingClientRect().height;
        let footer = document.querySelector('footer').getBoundingClientRect().height;
        await tick();
            innerH = window.innerHeight - header - footer - lowSelector - back;

        window.addEventListener('resize', async ()=>{
            await tick();
            innerH = window.innerHeight - header - footer - lowSelector - back;
        })
    });
    function select(value) {
        activeTabValue.set(value);
    }
    
    const handleClick = tabValue => () => activeTabValue.set(tabValue);

</script>
<div style="height:{innerH}px; display:flex; align-items:center;" >
    <nav class = "txt-list-nav" >
        <ul class="ul-txt-list" >
            {#each data.posts as txt}
            <li class="txt-list {selNum === txt.value ? 'active' : ''}" data-nums="{txt.value}"> 
                <a on:click={()=>{ 
                    console.log(selNum)
                    select(txt.value)}} href={txt.href}>{txt.title}</a>       
            </li>
            {/each}
            <!-- {#each [...txts_data].reverse() as txt}
            <li class="txt-list {selNum === txt.value ? 'active' : ''}" data-nums="{txt.value}"> 
                <a on:click={()=>{ 
                    console.log(selNum)
                    select(txt.value)}} href={txt.href}>{txt.title}</a>       
            </li>
            {/each} -->
        </ul>
    </nav>
</div>
<!-- <slot></slot> -->
<style>
    .txt-list-nav{
        width: 100%;
        box-sizing: border-box;
        transition: all 0.3s linear;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ul-txt-list {
        box-sizing: border-box;
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 5vh);
        /* margin: 5vh 1vh 48vh 1vh; */
        padding: 0;
        list-style:none;
        background-color:#ffffff;
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;  
        word-break: keep-all;
        margin-block-start: 0em;
        margin-block-end: 0em;
        gap: 1vh;
    }  
    .ul-txt-list li {
        padding: 1vh;
        color:black;
        text-align: center;
        font-size: 2.5vh;
    }
    .ul-txt-list li.txt-list.active {
        background: rgb(255, 255, 255);
        border-bottom:1.5px solid #6e6e6e; 
    }
    .ul-txt-list li a:link, .ul-txt-list li a:visited{
        color:black;
        text-decoration:none;
        transition: 0.5s ease-in; 
    }
    .ul-txt-list li a:hover, a:focus{
        color:rgb(255, 100, 100);
        background-color: #fff;
    }
    @media screen and (max-width: 1280px) and (orientation:landscape){
        .txt-list-nav{
            padding-top: 0;
        }
    }
    @media screen and (max-width: 1024px) {
        /* .ul-txt-list {
            margin: 5vh 1vh 48vh 1vh;
            grid-template-rows: repeat(3, 7vh);
        } */
        .ul-txt-list li {
            font-size: 1.8vh;
        }
    }
    @media screen and (max-width: 1024px) and (orientation:landscape){
        .ul-txt-list {
            /* margin: 5vh 1vh 10vh 1vh; */
            grid-template-rows: repeat(3, 1fr);
        }
        .ul-txt-list li {
            font-size: 2.8vh;
        }
    }
    @media screen and (max-width: 915px) {
        /* .ul-txt-list {
            margin: 5vh 1vh 23vh 1vh;
            grid-template-rows: repeat(3, 7vh);
        } */
        .ul-txt-list li {
            font-size: 1.5vh;
        }
    }
    @media screen and (max-width: 820px) {
        /* .ul-txt-list {
            margin: 5vh 1vh 15vh 1vh;
            grid-template-rows: repeat(3, 15vh);
        } */
        .ul-txt-list li {
            font-size: 1.8vh;
        }
    }
    @media screen and (max-width: 800px) {
        /* .ul-txt-list {
            margin: 5vh 1vh 16vh 1vh;
        } */
        .ul-txt-list li {
            font-size: 1.8vh;
        }
    }
    @media screen and (max-width: 740px) {
        /* .ul-txt-list {
            margin: 5vh 1vh 29vh 1vh;
            grid-template-rows: repeat(3, 7vh);
        } */
        .ul-txt-list li {
            font-size: 1.8vh;
        }
    }
    @media screen and (max-width: 600px) {
        .ul-txt-list {
            /* margin: 5vh 1vh 29vh 1vh; */
            grid-template-rows: repeat(3, 3.3rem);
        }
        .ul-txt-list li {
            font-size: 1.8vh;
        }
    }
    @media screen and (max-width: 375px) {
        .ul-txt-list {
            /* margin: 5vh 1vh 29vh 1vh; */
            grid-template-rows: repeat(3, 3.1rem);
        }
        .ul-txt-list li {
            font-size: 2.2vh;
        }
    }

</style>