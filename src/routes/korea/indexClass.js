export default class MakeIndex{
    constructor(startYear, lastYear, label, type, data, beginZero, ymin, ymax, grace, summary){

        const startNum = Number(startYear);

        let labels = [];

        if(lastYear === 5) {
            labels = [startNum.toString(), (startNum+1).toString(), (startNum+2).toString(), (startNum+3).toString(), (startNum+4).toString()];
        } else if(lastYear === 3){
            labels = [startNum.toString(), (startNum+1).toString(), (startNum+2).toString()];
        }

        const datasets = [{
            label : label,
            type : type,
            data : data
        }]

        this.data = {
            labels : labels,
            datasets : datasets
        }

        this.options = {
            responsive : true,
            scales : {
                y : {
                    beginAtZero : beginZero,
                    min : ymin,
                    max : ymax,
                    grace : grace 
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        usePointStyle: true,
                    }
                }
            }
        }
        this.summary = summary;
    }
}