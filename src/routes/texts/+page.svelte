<script>
        let txts_data = [
        {
            value: 1,
            title: "메모 2016 _ 오은",
            href:"/texts/article01"
        },
        {
            value: 2,
            title: "거슬러 오늘로 향하는 법 : “기도하는” 조형의 원리 _ 황재민 평론가",
            href: "/texts/article02"
        },
        {
            value: 3,
            title: "메모 2018 _ 오은",
            href: "/texts/article03"
        },
        {
            value: 4,
            title: "오늘의 문제적 오브제는 어떻게 조형되는가? _ 임근준 평론가 ",
            href: "/texts/article04"
        },
        {
            value: 5,
            title: "메모 2019 _ 오은",
            href: "/texts/article05"
        },
        {
            value: 6,
            title: "메모 2020 _ 오은",
            href: "/texts/article06"
        },
    ];

    let activeTabValue = 0;

    const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>
<nav>
    <ul class="ul-txt-list">
        {#each [...txts_data].reverse() as txt}
        <li class="txt-list {activeTabValue === txt.value ? 'active' : ''}"> 
            <a on:click={handleClick(txt.value)} href={txt.href}>{txt.title}</a>       
        </li>
        {/each}
    </ul>
</nav>
<slot></slot>
<style>
    .ul-txt-list {
        box-sizing: border-box;
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 5vh);
        margin: 5vh 1vh 48vh 1vh;
        padding: 0;
        list-style:none;
        background-color:#ffffff;
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;  
        word-break: keep-all;
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
    @media screen and (max-width: 1024px) {
        .ul-txt-list {
            margin: 5vh 1vh 48vh 1vh;
            grid-template-rows: repeat(3, 7vh);
        }
        .ul-txt-list li {
            font-size: 4vh;
        }
    }
    @media screen and (max-width: 1024px) and (orientation:landscape){
        .ul-txt-list {
            margin: 5vh 1vh 10vh 1vh;
            grid-template-rows: repeat(3, 15vh);
        }
        .ul-txt-list li {
            font-size: 4vh;
        }
    }
    @media screen and (max-width: 915px) {
        .ul-txt-list {
            margin: 5vh 1vh 23vh 1vh;
            grid-template-rows: repeat(3, 7vh);
        }
        .ul-txt-list li {
            font-size: 4vh;
        }
    }
    @media screen and (max-width: 820px) {
        .ul-txt-list {
            margin: 5vh 1vh 15vh 1vh;
            grid-template-rows: repeat(3, 15vh);
        }
        .ul-txt-list li {
            font-size: 3.3vh;
        }
    }
    @media screen and (max-width: 800px) {
        .ul-txt-list {
            margin: 5vh 1vh 16vh 1vh;
        }
        .ul-txt-list li {
            font-size: 3.3vh;
        }
    }
    @media screen and (max-width: 740px) {
        .ul-txt-list {
            margin: 5vh 1vh 29vh 1vh;
            grid-template-rows: repeat(3, 7vh);
        }
        .ul-txt-list li {
            font-size: 3.5vh;
        }
    }
    @media screen and (max-width: 600px) {
        .ul-txt-list {
            margin: 5vh 1vh 29vh 1vh;
            grid-template-rows: repeat(3, 10vh);
        }
        .ul-txt-list li {
            font-size: 2vh;
        }
    }

</style>