const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';

export async function getAll() {
    return fetch(`${baseUrl}/candidates`)
        .then(res => res.json())
}