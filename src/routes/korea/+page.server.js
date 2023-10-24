import axios from 'axios';

export async function load({ fetch }) {

    async function getIndexNuri(api){
        try {
            const response = await axios.get(api);
            // const response = await fetch(api);
            // const toJson = await response.json();
            if(response.status === 200){
                return response.data;
            }
        } catch (err) {
            console.log(err)
        }
    }

    // 총인구
    const totalPopulation = await getIndexNuri('https://www.index.go.kr/unity/openApi/sttsJsonViewer.do?idntfcId=M82C1532073D11O2&ixCode=5060&statsCode=506001&period=2023:2023');
    const toStringPop = totalPopulation[0]['값'];
    const addZero = `${toStringPop}000`;
    const finalTotalPop = Number(addZero);

    // 평균연령
    const averageAge = await getIndexNuri('https://www.index.go.kr/unity/openApi/sttsJsonViewer.do?idntfcId=M82C1532073D11O2&ixCode=F0005&statsCode=F000501&period=2022:2022');
    const toStringAge = averageAge[0]['값'];
    const finalAverageAge = Number(toStringAge);

    // 평균 실질 임금
    const averageSalary = await getIndexNuri('https://www.index.go.kr/unity/openApi/sttsJsonViewer.do?idntfcId=M82C1532073D11O2&ixCode=8085&statsCode=808501&period=2022:2022');
    const manSalary = Number(averageSalary[0]['값']); // 남자 임금
    const womanSalary = Number(averageSalary[1]['값']); // 여자 임금
    const fulltimeSalary = Number(averageSalary[2]['값']); // 정규직 임금
    const timeSalary = Number(averageSalary[3]['값']); // 비정규직 임금
    const salaryArray = [manSalary, womanSalary, fulltimeSalary, timeSalary] // 모두 배열에
    
    return {
        props: {
            totalPopulation : finalTotalPop,
            averageAge : finalAverageAge,
            averageSalary : salaryArray
        }
    };
}