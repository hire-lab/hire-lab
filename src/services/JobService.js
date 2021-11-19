const baseUrl = 'http://localhost:5500';

export async function getAll(){
    return fetch(`${baseUrl}/jobs`)
        .then(res => res.json())
}