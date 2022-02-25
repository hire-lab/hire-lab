import * as request from './requester';
const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';
//const baseUrl = 'http://localhost:5555';

export const getAll = () => request.get(`${baseUrl}/jobs`);

export const getAllBySearch = (keyword, location) => request.get(`${baseUrl}/jobs?title=${keyword}&location=${location}`);

export async function getOne(id){
    let result = await fetch(`${baseUrl}/jobs/${id}`);
    return result.json()
}

export async function getByCompanyId(id){
    let result = await fetch(`${baseUrl}/jobs/${id}/jobs`);
    return result.json()
}

export async function getCandidatesByJobId(jobId){
    let result = await fetch(`${baseUrl}/jobs/${jobId}/candidates`);
    return result.json()
}

export async function create(jobData) {
    let response = await fetch(`${baseUrl}/jobs`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(jobData)
    });

    let result = response.json();
    return result;
}

export const update = (jobId, jobData) => request.put(`${baseUrl}/jobs/${jobId}`, jobData)


export const del = (jobId, token) => {
    return fetch(`${baseUrl}/jobs/${jobId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    })
}