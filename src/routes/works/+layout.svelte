<script>
    let years_data = [
        {
            value: 1,
            year: "2023",
            href:"/works/2023"
        },
        {
            value: 2,
            year: "2022",
            href: "/works/2022"
        },
        {
            value: 3,
            year: "2021",
            href: "/works/2021"
        },
        {
            value: 4,
            year: "2020",
            href: "/works/2020"
        },
        {
            value: 5,
            year: "2019",
            href: "/works/2019"
        },
        {
            value: 6,
            year: "2018",
            href: "/works/2018"
        },
        {
            value: 7,
            year: "2017",
            href: "/works/2017"
        },
        {
            value: 8,
            year: "2016",
            href: "/works/2016"
        },
        {
            value: 9,
            year: "2015",
            href: "/works/2015"
        },
        {
            value: 10,
            year: "2014",
            href: "/works/2014"
        }
    ];
    let activeTabValue = 0;

    const handleClick = tabValue => () => (activeTabValue = tabValue);

</script>

<!-- Years Grid -->
    <nav>
        <ul class="ul-tab-menu">
            {#each years_data as year}
            <li class="tab-menu {activeTabValue === year.value ? 'active' : ''}"> 
                <a on:click={handleClick(year.value)} href={year.href}>{year.year}</a>       
            </li>
            {/each}
        </ul>
    </nav>
<div>
<slot></slot>
</div>
<style>
    .ul-tab-menu {
        box-sizing: border-box;
        display:grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 5vh);
        margin: 2vh 0 2vh 0;
        padding: 0;
        list-style:none;
        background-color:#ffffff;
        align-items: center;
        justify-items: center;
        justify-content: center;
        align-content: center;  
    }  
    .ul-tab-menu li {
        padding: 1vh;
        color:black;
        text-align: center;
        font-size: 2.5vh;
    }
    .ul-tab-menu li.tab-menu.active {
        background: rgb(255, 255, 255);
        border:1.5px solid #6e6e6e;
        border-radius:30%;  
    }
    .ul-tab-menu li a:link, .ul-tab-menu li a:visited{
        color:black;
        text-decoration:none;
        transition: 0.5s ease-in; 
    }
    .ul-tab-menu li a:hover{
        color:rgb(255, 100, 100);
        background-color: #fff;
    }
@media screen and (max-width: 1024px) {
    .ul-tab-menu {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 7vh);
    }
    .ul-tab-menu li {
        font-size: 3vh;
    }
}
@media screen and (max-width: 915px) {
    .ul-tab-menu {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 6.5vh);
    }
    .ul-tab-menu li {
        font-size: 4vh;
    }
}
@media screen and (max-width: 820px) {
    .ul-tab-menu {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 5vh);
    }
    .ul-tab-menu li {
        font-size: 2.5vh;
    }
}
@media screen and (max-width: 800px) {
    .ul-tab-menu {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 5vh);
    }
    .ul-tab-menu li {
        font-size: 2.5vh;
    }
}
@media screen and (max-width: 740px) {
    .ul-tab-menu {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 6vh);
    }
    .ul-tab-menu li {
        font-size: 3.5vh;
    }
}
@media screen and (max-width: 600px) {
    .ul-tab-menu {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 5vh);
    }
    .ul-tab-menu li {
        font-size: 2vh;
    }
}
</style>