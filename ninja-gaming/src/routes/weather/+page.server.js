import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const secret = import.meta.env.VITE_UNSECURE_SECRET
    const lat=33.44
    const lon=-94.04
    const part = "alerts"
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${secret}`
    // console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    if (response.ok) {
    return data;
    }
    throw error(404, 'Not found');
}