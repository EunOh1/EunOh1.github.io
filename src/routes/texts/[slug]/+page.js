import { error } from '@sveltejs/kit';

// export const prerender = 'false'

export async function load({ fetch, params }) {

    const response = await fetch("/api/posts");

    const posts = await response.json();

    const result = posts.filter((e,i) => {
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