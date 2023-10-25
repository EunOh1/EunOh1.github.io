<script>
    import Chart from 'chart.js/auto'
	import { onMount } from 'svelte';
    export let data;
    // const population = data.props.totalPopulation.toLocaleString();

    let chart01;
    let chart02;
    let chart03;
    let chart04;

    const getSocietyChanged = () => {
        const society = document.getElementById('societySelect');
        const selected = (society.options[society.selectedIndex].value);

        chart01.data = data.props[selected].data;
        chart01.options = data.props[selected].options;
        chart01.update();
    };

    const getEconomyChanged = () => {
        const economy = document.getElementById('economySelect');
        const selected = (economy.options[economy.selectedIndex].value);

        chart02.data = data.props[selected].data;
        chart02.options = data.props[selected].options;
        chart02.update();
    };

    const getCultureChanged = () => {
        const culture = document.getElementById('cultureSelect');
        const selected = (culture.options[culture.selectedIndex].value);

        chart03.data = data.props[selected].data;
        chart03.options = data.props[selected].options;
        chart03.update();
    };

    const getLaborChanged = () => {
        const labor = document.getElementById('laborSelect');
        const selected = (labor.options[labor.selectedIndex].value);

        chart04.data = data.props[selected].data;
        chart04.options = data.props[selected].options;
        chart04.update();
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
<div style="display: flex; position:absolute; flex-direction:column; background-color:white; width:100vw; height:100vh; overflow:auto; justify-content:center; align-items:center;" >
    <div class="koreabody">
        <h2>테스트 중이다 임마!</h2>

        <p>{data.props.totalPopulation.summary.pop}</p>
        <p>{data.props.totalPopulation.summary.growth}</p>

        <div class="chartgrid">
            <div class="chartbox">
                <h4>사회</h4>
                <select name="societySelect" id="societySelect" on:change={getSocietyChanged}>
                    <option value="suicideRate">자살률</option>
                    <option value="totalPopulation">총인구</option>
                    <option value="growthPopulation">인구성장률</option>
                    <option value="averageAge">평균연령</option>
                    <option value="totalBirth">합계출산률</option>
                    <option value="oldrate">고령화지수</option>
                    <option value="foreigner">체류외국인수</option>
                    <option value="birthDeath">출생/사망자수</option>
                    <option value="oldrate">고령화지수</option>
                    <option value="greengas">온실가스배출량</option>
                    <option value="immigrant">결혼이민자수</option>
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
                    <option value="houseCost">소득대비주택가격/임대료비율</option>
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
                    <option value="houseWork">가사분담률(여성주도)</option>
                    <option value="multicultural">다문화학생비율</option>
                    <option value="womanCongress">여성국회의원비율</option>
                    <option value="womanManager">여성관리자비율</option>
                </select>
                <div class="chart">
                    <canvas id="culture"></canvas>
                </div>
            </div>

            <div class="chartbox">
                <h4>노동</h4>
                <select name="laborSelect" id="laborSelect" on:change={getLaborChanged}>
                    <option value="monthlyWage">월평균임금</option>
                    <option value="hourlyWage">평균시간당임금</option>
                    <option value="laborRate">GDP대비노동소득비율</option>
                    <option value="unemployment">실업률</option>
                    <option value="youngUnemployment">청년실업률</option>
                    <option value="workSatisfaction">일자리만족도</option>
                    <option value="union">노동조합조직률</option>
                    <option value="wageGap">대기업/중소기업임금격차</option>
                    <option value="workingHours">주근로시간</option>
                </select>
                <div class="chart">
                    <canvas id="labor"></canvas>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
    p {
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    .koreabody{
        width: 70%;
    }
    .chart{
        width: 35rem;
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
</style>