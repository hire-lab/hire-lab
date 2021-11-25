const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';

export async function getAll(){
    return fetch(`${baseUrl}/jobs`)
        .then(res => res.json())
}