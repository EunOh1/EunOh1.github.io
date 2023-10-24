<script>
    // import { finalTotalPop } from "./setKorea";
    export let data;

    const population = data.props.totalPopulation.toLocaleString();

</script>

<h2>테스트 중이다 임마!</h2>

<p>총인구 {population} 명</p>
<p>평균연령 {data.props.averageAge} 세</p>
<p>평균남성임금 {data.props.averageSalary[0].toLocaleString()} 천원</p>
<p>평균여성임금 {data.props.averageSalary[1].toLocaleString()} 천원</p>
<p>평균정규직임금 {data.props.averageSalary[2].toLocaleString()} 천원</p>
<p>평균비정규직임금 {data.props.averageSalary[3].toLocaleString()} 천원</p>

<style>

</style>