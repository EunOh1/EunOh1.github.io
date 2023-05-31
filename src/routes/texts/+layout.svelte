<script>
    import { txts_data } from "./txt_data.js";
    import { activeTabValue } from '../store.js';
    
    // let activeTabValue = 0;
    let selNum;
    activeTabValue.subscribe((value)=>{
        console.log(value)
        selNum = value;
    })
    const handleClick = tabValue => () => activeTabValue.set(tabValue);

</script>
<slot></slot>
<nav class="numbering">
    <ul class="ul-txt-numbering">
        {#each [...txts_data].reverse() as txt}
        <li class="txt-numbering"> 
            <a class="{selNum === txt.value ? 'active' : ''}" on:click={handleClick(txt.value)} href={txt.href}>{txt.value}</a>       
        </li>
        {/each}
    </ul>
</nav>
<p class="back"><a href="/texts" on:click={handleClick(0)}>&gt;back to list&lt;</a></p>
<style>
    nav {
        border-top: 1px solid #6e6e6e;
    }
    .ul-txt-numbering {
        box-sizing: border-box;
        display:grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: minmax(auto);
        /* margin: 3vh 30vh 3vh 30vh; */
        padding: 0;
        list-style:none;
        background-color:#ffffff;
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;
    }  
    .ul-txt-numbering li {
        padding: 0vh;
        color:black;
        text-align: center;
        font-size: 2.5vh;
    }
    .ul-txt-numbering li a:link, .ul-txt-numbering li a:visited{
        color:black;
        text-decoration:none;
        transition: 0.5s ease-in; 
    }
    .ul-txt-numbering li a:hover, a:focus{
        color:rgb(255, 100, 100);
        background-color: #fff;
    }
    .ul-txt-numbering li a.active {
        background: rgb(255, 255, 255);
        color: rgb(255, 100, 100);
        border-bottom:1.5px solid rgb(255, 100, 100);
    }
    .numbering{
        padding: 0.5vh 0 1vh 0;
        box-sizing: border-box;
    }
    .back {
        /* padding: 0.5vh 0 2vh 0; */
        padding-bottom: 0.5vh;
        box-sizing: border-box;
        font-size: 3vh;
        text-align: center;
        margin-block-start: 0em;
        margin-block-end: 0em;
    }
    .back a:link, .back a:visited{
        color: black;
        text-decoration: none;
        transition: 0.5s ease-in; 
    }
    .back a:hover, a:focus{
        color:rgb(255, 100, 100);
        background-color: #fff;
    }
    @media screen and (max-width: 1024px) {
        .ul-txt-numbering li{
            font-size: 2.2vh;
        }
        .back {
            font-size: 2.2vh;
        }
    }
    @media screen and (max-width: 915px) {
        .ul-txt-numbering li{
            font-size: 2.2vh;
        }
        .back {
            font-size: 2.2vh;
        }
    }
    @media screen and (max-width: 820px) {
        .ul-txt-numbering li{
            font-size: 2.2vh;
        }
        .back {
            font-size: 2.2vh;
        }
    }
    @media screen and (max-width: 740px) {
        .ul-txt-numbering li{
            font-size: 2.2vh;
        }
        .back {
            font-size: 2.2vh;
        }
    }
    @media screen and (max-width: 600px) {
        .ul-txt-numbering li{
            font-size: 2.2vh;
        }
        .back {
            font-size: 2.2vh;
        }
    }
</style>

