import axios from 'axios'

async function getToken() {
    try {
        const response = await axios.get('https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json', {
                            params : {
                                consumer_key : '3611be5512d04d95bd5e',
                                consumer_secret : '80cd5e2a2a85418d97a7'
                            }
                        });
        const accessToken = response.data.result.accessToken
        return accessToken;

    } catch (err) {
        console.log(err)
    }
};

async function getIndexPopulation(token){
    try{
        const response = await axios.get('https://sgisapi.kostat.go.kr/OpenAPI3/stats/population.json', {
                            params: {
                                accessToken : token,
                                year : "2021",
                                low_search : "1"
                            }
                        });
        return response.data;
    } catch (err) {
        console.log(err)
    }
}

async function getPopulation(token){
    try {
        const response = await axios.get('https://sgisapi.kostat.go.kr/OpenAPI3/stats/searchpopulation.json', {
                            params: {
                                accessToken : token,
                                year : "2021",
                            }
                        });
        return response.data;
    } catch (err) {
        console.log(err)
    }
}

async function getIndexNuri(api){
    try {
        // const response = await axios.get(api);
        const response = await fetch(api);
        const toJson = await response.json();
        // return response.data;
        return toJson;

    } catch (err) {
        console.log(err)
    }
}

    // const accessToken = await getToken();
    // console.log(accessToken)

    // const population = await getIndexPopulation(accessToken);
    // console.log(population)

export const totalPopulation = await getIndexNuri('https://www.index.go.kr/unity/openApi/sttsJsonViewer.do?idntfcId=M82C1532073D11O2&ixCode=5060&statsCode=506001&period=2023:2023')

