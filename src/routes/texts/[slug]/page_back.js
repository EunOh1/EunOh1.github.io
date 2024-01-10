import { error } from '@sveltejs/kit';
import { txts_data } from "../txt_data.js";

export function load({ params }) {

    // console.log(params.slug) 

    const result = txts_data.filter((e,i) => {
        if(params.slug === e.page) return e;
    });

    if(result.length > 0){
        const matched = result[0]
        return {...matched};
    }else{
        return {
            title: "Oh...Dear",
            txt: 'There is no such text..',
            author: "nope!"
        }
    }
    
}