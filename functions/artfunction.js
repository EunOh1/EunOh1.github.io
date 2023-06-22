addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

export async function handleRequest(request) {
    let url = new URL(request.url);

    if (request.method === 'POST') {
        const requestBody = await request.json(); // 본문을 JSON으로 파싱
        await art_history.put(requestBody.name, JSON.stringify(requestBody.age));
        return new Response(`Data saved!`, {status: 200});

    } else if (request.method === 'GET') {
        let key = url.searchParams.get("key");
        let store = await art_history.get(key);
        return new Response(store || '', {status: 200})
    } else {
        return new Response(`Method not supported.`, {status: 405})
    }
}