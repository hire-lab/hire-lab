import * as request from './requester';
//const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';
const baseUrl = 'http://localhost:5555';

export async function getAll() {
    let result =  await fetch(`${baseUrl}/candidates`);
    return result.json()
}

export async function getOne(id) {
    let result = await fetch(`${baseUrl}/candidates/${id}`);
    return result.json()
}

export async function create(data){
    let result = await fetch(`${baseUrl}/candidates`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let response = result.json();
    return response;
}

export const update = (candidateId, candidateData) => request.put(`${baseUrl}/candidates/${candidateId}`, candidateData)