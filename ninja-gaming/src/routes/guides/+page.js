/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
        );
    const guides = await res.json();

    if (res.ok) {
        return {
            guides
        };
    }
    else {
        throw error(404, 'No posts to display')
    }
}