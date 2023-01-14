<script>
        let txts_data = [
        {
            value: 1,
            title: "article01",
            href:"/texts/article01"
        },
        {
            value: 2,
            title: "article02",
            href: "/texts/article02"
        },
        {
            value: 3,
            title: "article03",
            href: "/texts/article03"
        },
        {
            value: 4,
            title: "article04",
            href: "/texts/article04"
        },
        {
            value: 5,
            title: "article05",
            href: "/texts/article05"
        },
        {
            value: 6,
            title: "article06",
            href: "/texts/article06"
        },
    ];
    let activeTabValue = 0;
    const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>
<slot></slot>
<nav>
    <ul class="ul-txt-numbering">
        {#each [...txts_data].reverse() as txt}
        <li class="txt-numbering {activeTabValue === txt.value ? 'active' : ''}"> 
            <a on:click={handleClick(txt.value)} href={txt.href}>{txt.value}</a>       
        </li>
        {/each}
    </ul>
</nav>
<p class="back"><a href="/texts">&gt;back to list&lt;</a></p>
<style>
    nav {
        border-top: 1px solid #6e6e6e;
    }
    .ul-txt-numbering {
        box-sizing: border-box;
        display:grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: minmax(auto);
        margin: 3vh 30vh 3vh 30vh;
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
    .ul-txt-numbering li.txt-numbering.active {
        background: rgb(255, 255, 255);
        border-bottom:1.5px solid #6e6e6e; 
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
    .back {
        padding: 0vh 0 3vh 0;
        font-size: 3vh;
        text-align: center;
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
        .ul-txt-numbering {
            margin: 3vh 30vh 3vh 30vh;
        }
    }
    @media screen and (max-width: 915px) {
        .ul-txt-numbering {
            margin: 3vh 30vh 3vh 30vh;
        }
    }
    @media screen and (max-width: 820px) {
        .ul-txt-numbering {
            margin: 3vh 18vh 3vh 18vh;
        }
    }
    @media screen and (max-width: 740px) {
        .ul-txt-numbering {
            margin: 3vh 30vh 3vh 30vh;
        }
    }
    @media screen and (max-width: 600px) {
        .ul-txt-numbering {
            margin: 3vh 8vh 3vh 8vh;
        }
    }
</style>

