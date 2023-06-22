// addEventListener('fetch', event => {
//     event.respondWith(onRequest(event.request))
// })

export async function onRequest(context) {

    try{

        const {
            request, // same as existing Worker API
            env, // same as existing Worker API
            params, // if filename includes [id] or [[path]]
            waitUntil, // same as ctx.waitUntil in existing Worker API
            next, // used for middleware or to fetch assets
            data, // arbitrary space for passing data between middlewares
        } = context;

        const KV = context.env.artHistory;

        // Handle OPTIONS method for CORS preflight
        if (request.method === 'OPTIONS') {
            let response = new Response(null, { status: 204 });
            response.headers.set('Access-Control-Allow-Origin', '*');
            response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
            return response;
        }
        if (request.method === 'POST') {
            const requestBody = await request.json(); // 본문을 JSON으로 파싱
            await KV.put(requestBody.key, JSON.stringify(requestBody.value));

            // Add CORS headers
            // response.headers.set('Access-Control-Allow-Origin', '*');
            // response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            // response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

            return new Response(`Data saved!`, {status: 200});

        } else if (request.method === 'GET') {
            let url = new URL(request.url);
            let key = url.searchParams.get("key");
            let store = await KV.get(key);

            // Add CORS headers
            // response.headers.set('Access-Control-Allow-Origin', '*');
            // response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            // response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

            return new Response(store || '', {status: 200});

        } else {
            return new Response(`Method not supported.`, {status: 405})
        }

    } catch (err) {
        //flatten the error
        let json = JSON.stringify(err)
        //return the error
        return new Response(err);
    }

}