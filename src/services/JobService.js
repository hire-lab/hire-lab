import * as request from './requester';
//const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';
const baseUrl = 'http://localhost:5555';

export const getAll = () => request.get(`${baseUrl}/jobs`);

export async function getOne(id){
    let result = await fetch(`${baseUrl}/jobs/${id}`);
    return result.json()
}

export async function getByCompanyId(id){
    let result = await fetch(`${baseUrl}/jobs/${id}/jobs`);
    return result.json()
}

/*export async function getByJobId(jobId){
    let result = await fetch(`${baseUrl}/jobs/${jobId}/candidates`);
    console.log(result.json())
    return result.json()
}*/

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