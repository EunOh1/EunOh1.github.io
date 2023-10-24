import {totalPopulation} from "$lib/getKorea";

const stringPop = totalPopulation[0]['값'];
const addZero = `${stringPop}000`;
const finalTotalPop = Number(addZero);

console.log(finalTotalPop)

export { finalTotalPop }