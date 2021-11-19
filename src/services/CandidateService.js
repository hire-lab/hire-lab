const baseUrl = 'http://localhost:5500';

export async function getAll() {
    return fetch(`${baseUrl}/candidates`)
        .then(res => res.json())
}