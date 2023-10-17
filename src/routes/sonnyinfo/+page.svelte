<script>
    import { beforeUpdate, onMount } from "svelte";
    import dayjs from 'dayjs';

    let nowtime = dayjs().format('HH:mm:ss MM/DD/YYYY');
    const intervalId = setInterval(() => {
            nowtime = dayjs().format('HH:mm:ss MM/DD/YYYY');
        }, 1000); // 1초마다 업데이트

    async function hiding(){
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';  
    }

    onMount(async()=>{
        await hiding();
        return() => {
            clearInterval(intervalId);
        }
    })
</script>

<div class="sonnypage">
    <div class="sonnycontents">
        <p class="sonnytitle">...요즘 같은 세상에 진심 기념할만한...?</p>

        <div class="sonnybanner">
            <p class="sonnystar">*******************************************************************</p>
            <div class="sonnybannercon">
                <img class="sonnyphoto" src="/assets/sonnyinfo/photo.jpg" alt="sonnyshot">
                <div class="bannercon">
                    <div class="sonnytime">
                        <p>{nowtime}</p>
                    </div>
                    <p>HAPPY</p>
                    <div class="bannercontwo">
                        <p class="sonnymark">!</p><p class="sonnynum">237</p><p class="sonnygoal">GOAL</p><p class="sonnymark">!</p>
                    </div>
                </div>
                <img class="sonnyphoto" src="/assets/sonnyinfo/photo.jpg" alt="sonnyshot">
            </div>
            <p class="sonnystar">*******************************************************************</p>
        </div>

        <div class="sonnytext">
            <p>조각이 다시 무언가를 기념할 수 있다면, 그 대상은 무엇이 되면 좋을까 생각해왔는데요.<br>요즘에는 함부로 조각을 통해, 거기다 형상을 통해 무언가를 기념하는 일이 쉽지는 않은 것 같더라고요.<br>
                하지만 그러한 오늘날에도, 손흥민 선수라면 진심으로 기념할 수 있을 것 같았어요?<br><br>
                아무튼 이런저런 생각을 하다가 몇 해 전에 손흥민 선수를 기념하는 조각을 하나 만들었습니다.<br>
                엄청 재밌게 만들었는데 다 만들고보니까 마음에 안들기도하고 뭔가 부족해서 저기  쳐박아놨다가 폐기했어요.<br>
                근데 다행히? 사진을 많이 찍어놔서 3D 파일로 만들 수 있겠더라구요.<br><br>
                그래서 겸사겸사 3D로 만들었는데 어디 써먹을 데가 없어가지고.<br>
                웹에서 볼 수 있으면 좋겠다 해서 띄워봤는데 또 너무 심심한 것 같아서 몇 가지 효과를 입혀본 그런 것입니다.<br> 
                나이스 원 쏘니!</p>
        </div>

        <div class="sonnygif">
            <img class="sonnygifimg" src="/assets/sonnyinfo/sonny.gif" alt="sonnygif">
        </div>

        <p class="sonnycaption">Sonny_2023_responsive web</p>

        <div class="sonnyviewpage">
            <a href="/sonny">click</a>
        </div>
    </div>
</div>

<style>
    .sonnypage{
        background-color: black;
        color: white;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        z-index: 9000;
        position: absolute;
    }

    .sonnypage p{
        margin-block-start: 0px;
        margin-block-end: 0px;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    .sonnycontents{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 40rem;
    }

    .sonnytitle{
        padding-top: 2rem;
        font-family: 'DungGeunMo';
        font-size: 1.875rem;
        text-align: center;
    }

    .sonnybanner{
        font-family: 'DungGeunMo';
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.2rem 0;
    }
    .sonnybannercon{
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 0.5rem 0;
        align-items: center;
    }
    .sonnyphoto{
        width: 10rem;
        height: auto;
    }
    .bannercon{
        text-align: center;
        font-size: 2.8rem;
        line-height: 2rem;
        font-family: 'Alumni Sans Collegiate One', sans-serif;
        color: orange;
        width: 14rem;
    }
    .sonnytime{
        color: white;
        font-family: 'Rubik Mono One', monospace;
        font-size: 1.25rem;
        line-height: 1.5rem;
        padding-bottom: 0.5rem;
    }
    .bannercontwo{
        display: flex;
        flex-direction: row;
        gap: 0.2rem;
        justify-content: center;
    }
    .sonnymark{
        color: yellow;
    }
    .sonnynum{
        color: magenta;
    }
    .sonnygoal{
        color: #00FF08;
        font-style: italic;
    }
    .sonnytext{
        text-align: center;
        font-family: 'DungGeunMo';
        font-size: 1.125rem;
        line-height: 1.9rem;
        z-index: 10;
    }
    .sonnygif{
        position: absolute;
        top: 45%;
        opacity: 0.6;
    }
    .sonnygifimg{
        width: 17.5rem;
    }
    .sonnycaption{
        position: relative;
        padding: 2rem 0 0;
        font-family:'DungGeunMo';
        font-size: 1.125rem;
        color: white;
        opacity: 0.6;
    }
    .sonnyviewpage{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Silkscreen', sans-serif;
        font-size: 1.3rem;
        color: black;
        background-color: white;
        width: 10rem;
        height: 2.5rem;
        border-radius: 0.3rem;
        margin: 2rem;
    }
    .sonnyviewpage a{
        text-decoration: none;
        color: black;
    }


@media screen and (max-width:1400px) {
    .sonnypage{
        display: flex;
    }
}
@media screen and (max-width:1180px) and (orientation:landscape) {
    :global(body) {
        height: 100%;
        overflow: auto;
    }
    .sonnypage{
        height: auto;
        overflow: auto;
        display: flex;
    }
}
@media screen and (max-width:1024px) and (orientation:portrait) {
    :global(body) {
        height: 100%;
        overflow: auto;
    }
    .sonnypage{
        display: flex;
        height: 100%;
    }
    .sonnygif{
        top: 47%;
    }
    .sonnycaption{
        padding: 5rem 0 0;
    }
    .sonnyviewpage{
        margin: 3rem 0;
    }
}
@media screen and (max-width:1024px) and (orientation:landscape) {
    :global(body) {
        height: 100%;
        overflow: auto;
    }
    .sonnypage{
        height: auto;
        overflow: auto;
        display: flex;
    }
}
@media screen and (max-width:820px) and (orientation:portrait){
    :global(body) {
        height: 100%;
        overflow: auto;
    }
    .sonnypage{
        display: flex;
        height: 100%;
    }
}
@media screen and (max-width:820px) and (orientation:landscape){
    :global(body) {
        height: 100%;
        overflow: auto;
    }
    .sonnypage{
        display: flex;
        height: auto;
    }
}
@media screen and (max-width:420px){
    :global(body) {
        height: 100%;
        overflow: auto;
    }
    .sonnypage{
        height: auto;
        overflow: auto;
    }
    .sonnycontents{
        width: 24rem;
    }
    .sonnytitle{
        padding-top: 2rem;
        font-size: 1.25rem;
        width: 25.5rem;
    }
    .sonnystar{
        font-size: 0.7rem;
    }
    .sonnyphoto{
        width: 7rem;
        height: auto;
    }
    .bannercon{
        font-size: 2.5rem;
        line-height: 2rem;
        width: 9.5rem;
    }
    .sonnytime{
        font-size: 1rem;
        line-height: 1rem;
    }
    .sonnytext{
        font-size: 1rem;
        line-height: 1.5rem;
    }
    .sonnygif{
        top: 52%;
    }
    .sonnygifimg{
        width: 15rem;
    }
    .sonnycaption{
        padding: 4.2rem 0 0;
    }
    .sonnyviewpage{
        font-size: 1.2rem;
        width: 6rem;
        height: 2.3rem;
        border-radius: 0.3rem;
        margin: 1.7rem 0;;
    }
}
@media screen and (max-width:390px){
    :global(body) {
        height: 100%;
        overflow: auto;
    }
    .sonnypage{
        height: auto;
        overflow-y: auto;
        overflow-x: hidden;
    }
    .sonnycontents{
        width: 22rem;
    }
    .sonnytitle{
        padding-top: 1.2rem;
        font-size: 1.1rem;
        width: 22rem;
    }
    .sonnybanner{
        padding: 1rem 0;
    }
    .sonnybannercon{
        padding: 0.5rem 0;
    }
    .sonnyphoto{
        width: 7rem;
        height: auto;
    }
    .bannercon{
        font-size: 2rem;
        line-height: 1.5rem;
        width: 8rem;
    }
    .sonnytime{
        font-size: 0.8rem;
        line-height: 1rem;
    }
    .sonnytext{
        font-size: 0.9rem;
        line-height: 1.4rem;
    }
    .sonnygif{
        top: 46%;
    }
    .sonnygifimg{
        width: 15rem;
    }
    .sonnycaption{
        padding: 3rem 0 0;
        font-size: 1rem;
    }
    .sonnyviewpage{
        font-size: 1.2rem;
        width: 6rem;
        height: 2.3rem;
        border-radius: 0.3rem;
        margin: 2rem 0;
    }
    .sonnystar{
        font-size: 0.5rem;
    }
}
@media screen and (max-width:320px) {
    :global(body) {
        height: 100%;
        overflow: auto;
    }
    .sonnypage{
        height: auto;
    }
    .sonnycontents{
        width: 19rem;
    }
    .sonnytitle{
        padding-top: 1rem;
        font-size: 1rem;
        width: 20rem;
    }
    .sonnystar{
        text-align: center;
    }
    .sonnybannercon{
        width: 19rem;
    }
    .sonnyphoto{
        width: 6rem;
        height: auto;
    }
    .bannercon{
        font-size: 1.5rem;
        line-height: 1.3rem;
        width: 8rem;
    }
    .sonnytime{
        font-size: 0.8rem;
        line-height: 1rem;
        padding-bottom: 0.2rem;
    }
    .sonnytext{
        font-size: 0.8rem;
        line-height: 1.3rem;
    }
    .sonnygif{
        top: 49%;
    }
    .sonnygifimg{
        width: 14rem;
    }
    .sonnycaption{
        padding: 4.5rem 0 0;
        font-size: 0.8rem;
    }
    .sonnyviewpage{
        font-size: 1rem;
        height: 2rem;
        margin: 1.2rem 0;
    }
}

</style>