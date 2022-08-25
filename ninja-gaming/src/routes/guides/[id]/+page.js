/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params }) {
    // await new Promise(resolve => setTimeout(resolve, 1000))
    const id = params.id
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
        );
    const guide = await res.json();

    if (res.ok) {
        return {
            guide
        };
    }
    else {
        throw error(404, 'Could not fetch the guide')
    }
}