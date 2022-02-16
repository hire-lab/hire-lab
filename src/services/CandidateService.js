import * as request from './requester';
//const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';
const baseUrl = 'http://localhost:5555';

export async function getAll(companyId) {
    let result =  await fetch(`${baseUrl}/candidates/${companyId}/candidates`);
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

export const update = (candidateId, candidateData) => request.put(`${baseUrl}/candidates/${candidateId}`, candidateData);

export const del = (candidateId, token) => {
    return fetch(`${baseUrl}/candidates/${candidateId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    })
}