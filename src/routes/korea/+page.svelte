<script>
    import Chart from 'chart.js/auto'
	import { onMount } from 'svelte';
    export let data;

    function beforePrintHandler () {
        for (var id in Chart.instances) {
            Chart.instances[id].resize();
        }
    }

    let chart01;
    let chart02;
    let chart03;
    let chart04;

    let societyString = data.props.suicideRate.summary;
    let economyString = data.props.houseDebt.summary;
    let cultureString = data.props.lifeSatisfaction.summary;
    let laborString = data.props.monthlyWage.summary;

    const getSocietyChanged = () => {
        const society = document.getElementById('societySelect');
        const selected = (society.options[society.selectedIndex].value);

        chart01.data = data.props[selected].data;
        chart01.options = data.props[selected].options;
        chart01.update();

        societyString = data.props[selected].summary; 
    };

    const getEconomyChanged = () => {
        const economy = document.getElementById('economySelect');
        const selected = (economy.options[economy.selectedIndex].value);

        chart02.data = data.props[selected].data;
        chart02.options = data.props[selected].options;
        chart02.update();

        economyString = data.props[selected].summary; 
    };

    const getCultureChanged = () => {
        const culture = document.getElementById('cultureSelect');
        const selected = (culture.options[culture.selectedIndex].value);

        chart03.data = data.props[selected].data;
        chart03.options = data.props[selected].options;
        chart03.update();

        cultureString = data.props[selected].summary; 
    };

    const getLaborChanged = () => {
        const labor = document.getElementById('laborSelect');
        const selected = (labor.options[labor.selectedIndex].value);

        chart04.data = data.props[selected].data;
        chart04.options = data.props[selected].options;
        chart04.update();

        laborString = data.props[selected].summary; 
    };

    onMount(()=>{
        const ctx01 = document.getElementById('society');
        const ctx02 = document.getElementById('economy');
        const ctx03 = document.getElementById('culture');
        const ctx04 = document.getElementById('labor');

        chart01 = new Chart(ctx01, {
            type: 'bar',
            data: data.props.suicideRate.data,
            options: data.props.suicideRate.options
        });

        chart02 = new Chart(ctx02, {
            type: 'bar',
            data: data.props.houseDebt.data,
            options: data.props.houseDebt.options
        });

        chart03 = new Chart(ctx03, {
            type: 'bar',
            data: data.props.lifeSatisfaction.data,
            options: data.props.lifeSatisfaction.options
        });

        chart04 = new Chart(ctx04, {
            type: 'bar',
            data: data.props.monthlyWage.data,
            options: data.props.monthlyWage.options
        });
    })
</script>

<div class="koreatop" style="display: flex; position:absolute; flex-direction:column; background-color:white; width:100%; overflow:auto; justify-content:center; align-items:center;" >
    <div class="dontlandscape"><h2>가로모드하지마</h2></div>
    <div class="koreabody">
        <div class="koreatext">
            <a href="/works/2023"><h3>Korea</h3></a>
            <p>사회 : {societyString}</p>
            <p>경제 : {economyString}</p>
            <p>문화 : {cultureString}</p>
            <p>노동 : {laborString}</p>
        </div>

        <div class="chartgrid">
            <div class="chartbox">
                <h4>사회</h4>
                <select name="societySelect" id="societySelect" on:change={getSocietyChanged}>
                    <option value="suicideRate">자살률</option>
                    <option value="totalPopulation">총인구</option>
                    <option value="growthPopulation">인구성장률</option>
                    <option value="averageAge">평균연령</option>
                    <option value="averageBirth">합계출산률</option>
                    <option value="oldrate">고령화지수</option>
                    <option value="foreigner">체류외국인수</option>
                    <option value="birthDeath">출생/사망자수</option>
                    <option value="oldrate">고령화지수</option>
                    <option value="greengas">온실가스배출량</option>
                    <option value="immigrant">결혼이민자수</option>
                    <option value="trust">기관신뢰도</option>
                    <option value="others">대인신뢰도</option>
                    <option value="criminal">범죄피해율</option>
                    <option value="isolation">사회적고립도</option>
                </select>
                <div class="chart">
                    <canvas id="society"></canvas>
                </div>
            </div>

            <div class="chartbox">
                <h4>경제</h4>
                <select name="economySelect" id="economySelect" on:change={getEconomyChanged}>
                    <option value="houseDebt">가계부채비율</option>
                    <option value="forex">외환보유액</option>
                    <option value="gni">국민총소득(GNI)</option>
                    <option value="inflation">소비자물가상승률</option>
                    <option value="growth">경제성장률</option>
                    <option value="middleIncome">기준중위소득추이</option>
                    <option value="middleIncomeLow">중위소득50%미만비율</option>
                    <option value="houseCost">소득대비주택가격/임대료비율</option>
                    <option value="employ">고용률</option>
                </select>
                <div class="chart">
                    <canvas id="economy"></canvas>
                </div>
            </div>

            <div class="chartbox">
                <h4>문화</h4>
                <select name="cultureSelect" id="cultureSelect" on:change={getCultureChanged}>
                    <option value="lifeSatisfaction">삶의만족도</option>
                    <option value="residentialArea">1인당주거면적</option>
                    <option value="discrimination">차별경험률</option>
                    <option value="minorDistance">소수자에대한거리감</option>
                    <option value="minorInclusive">성소수자에대한포용성</option>
                    <option value="domesticViolence">가정폭력피해경험률</option>
                    <option value="houseWork">가사분담률(여성)</option>
                    <option value="multicultural">다문화학생비율</option>
                    <option value="womanCongress">여성국회의원비율</option>
                    <option value="womanManager">여성관리자비율</option>
                    <option value="library">공공도서관수</option>
                    <option value="pride">국민자긍심</option>
                    <option value="wellbeing">긍정정서</option>
                    <option value="leisure">문화예술 및 스포츠 관람회수</option>
                </select>
                <div class="chart">
                    <canvas id="culture"></canvas>
                </div>
            </div>

            <div class="chartbox">
                <h4>노동</h4>
                <select name="laborSelect" id="laborSelect" on:change={getLaborChanged}>
                    <option value="monthlyWage">월평균임금(천원)</option>
                    <option value="hourlyWage">평균시간당임금</option>
                    <option value="laborRate">GDP대비노동소득비율</option>
                    <option value="unemployment">실업률</option>
                    <option value="youngUnemployment">청년실업률</option>
                    <option value="workSatisfaction">일자리만족도</option>
                    <option value="union">노동조합조직률</option>
                    <option value="wageGap">대기업/중소기업임금격차</option>
                    <option value="workingHours">주근로시간</option>
                    <option value="accident">산재사망률</option>
                    <option value="lowWages">저임금근로자비율</option>
                    <option value="houseWorkHours">가사노동시간</option>
                </select>
                <div class="chart">
                    <canvas id="labor"></canvas>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    h3{
        margin-block-start: 0em;
        margin-block-end: 0.4em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    h4{
        margin-block-start: 0.3em;
        margin-block-end: 0.3em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    p {
        margin-block-start: 0.5rem;
        margin-block-end: 0.5rem;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    .dontlandscape{
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: none;
        justify-content: center;
        align-items: center;
        top: 0%;
    }
    .koreabody{
        width: 70%;
    }
    .koreatext{
        margin-top: 4rem;
    }
    .chart{
        width: 30rem;
        height: 15rem;
        min-height: auto;
        position: relative;
        display: flex;
        flex-grow: 1;
    }
    .chartgrid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .chartbox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:1366px) {
        .koreatop{
            height: 100%;
        }
        .koreabody{
            width: 90%;
        }
        .koreatext{
            text-indent: 3rem;
            margin-bottom: 3rem;
            margin-top: 0rem;
        }
        .chart{
            width: 24rem;
            height: 12rem;
        }
    }
    @media screen and (max-width:1180px) and (orientation:landscape) {
        .koreatext{
            margin-top: 1.5rem;
        }
        .koreabody{
            width: 80%;
        }
        .chart{
            width: 26rem;
            height: 13rem;
        }
    }
    @media screen and (max-width:1024px) and (orientation:portrait) {
        :global(body) {
            height: 100%;
            overflow: auto;
            font-size: 14px;
        }
        .koreatop{
            height: 100%;
        }
        .koreabody{
            width: 90%;
        }
        .koreatext{
            text-indent: 3rem;
            margin-bottom: 3rem;
            margin-top: 0rem;
        }
        .chart{
            width: 24rem;
            height: 12rem;
        }
    }
    @media screen and (max-width:1024px) and (orientation:landscape) {
        .koreatext{
            margin-top: 0rem;
        }
        .koreabody{
            width: 80%;
        }
        .chart{
            width: 22rem;
            height: 11rem;
        }
    }
    @media screen and (max-width:820px) and (orientation:portrait){
        :global(body) {
            height: 100%;
            overflow: auto;
            font-size: 14px;
        }
        .koreatop{
            height: 100%;
        }
        .koreabody{
            width: 100%;
        }
        .koreatext{
            text-indent: 3rem;
            margin-bottom: 3rem;
            margin-top: 0rem;
        }
        .chart{
            width: 20rem;
        }
    }
    @media screen and (max-width:915px) and (orientation:landscape){
        .dontlandscape{
            display: flex;
            background-color: white;
            z-index: 1000;
        }
        .koreabody{
            display: none;
        }
    }
    @media screen and (max-width:420px){
        :global(body) {
            height: 100%;
            overflow: auto;
            font-size: 14px;
        }
        .koreatop{
            height: auto;
        }
        .koreabody{
            width: 100%;
        }
        .koreatext{
            text-indent: 0rem;
            margin-bottom: 0rem;
            margin-top: 0rem;
        }
        .chartgrid{
            grid-template-columns: repeat(1, 1fr);
        }
        .chart{
            width: 20rem;
        }
    }
    @media screen and (max-width:390px){
        :global(body) {
            height: 100%;
            overflow: auto;
            font-size: 14px;
        }
        .koreatop{
            height: auto;
        }
        .koreabody{
            width: 100%;
        }
        .koreatext{
            text-indent: 0rem;
            margin-bottom: 0rem;
            margin-top: 0rem;
        }
        .chartgrid{
            grid-template-columns: repeat(1, 1fr);
        }
        .chart{
            width: 20rem;
        }
    }
    @media screen and (max-width:320px) {
        :global(body) {
            height: 100%;
            overflow: auto;
            font-size: 12px;
        }
        .koreatop{
            height: auto;
        }
        .koreabody{
            width: 100%;
        }
        .koreatext{
            text-indent: 0rem;
            margin-bottom: 0rem;
            margin-top: 0rem;
        }
        .chartgrid{
            grid-template-columns: repeat(1, 1fr);
        }
        .chart{
            width: 20rem;
        }
    }
</style>