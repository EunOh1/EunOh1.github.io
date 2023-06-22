// addEventListener('fetch', event => {
//     event.respondWith(onRequest(event.request))
// })

export async function onRequest(context) {
    const request = context.request;
    console.log(request)

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
        await art_history.put(requestBody.name, JSON.stringify(requestBody.age));

        // Add CORS headers
        // response.headers.set('Access-Control-Allow-Origin', '*');
        // response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        // response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return new Response(`Data saved!`, {status: 200});

    } else if (request.method === 'GET') {
        let url = new URL(request.url);
        let key = url.searchParams.get("key");
        let store = await art_history.get(key);

        // Add CORS headers
        // response.headers.set('Access-Control-Allow-Origin', '*');
        // response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        // response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return new Response(store || '', {status: 200});

    } else {
        return new Response(`Method not supported.`, {status: 405})
    }
}