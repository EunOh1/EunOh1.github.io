import { json } from "@sveltejs/kit";

async function getPosts() {

    let posts = [];

    const paths = import.meta.glob("/src/md/*.md", { eager: true });

    for (const path in paths) {

        const file = paths[path];
        // const slug = path.split("/").at(-1)?.replace(".md", "");

        if (file && typeof file === "object" && "metadata" in file) { //&& slug
            const metadata = file.metadata;
            const contents = file.default.render().html;

            // console.log(contents)

            // const post = { ...metadata, slug : slug }
            const post = { ...metadata, contents: contents}

            // console.log(post);

            posts.push(post);
        }
    }

    posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());
    
    return posts;
}

export async function GET() {
    const posts = await getPosts();
    return json(posts);
}