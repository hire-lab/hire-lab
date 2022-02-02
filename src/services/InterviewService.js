import * as request from './requester';
//const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';
const baseUrl = 'http://localhost:5555';

export async function getAll() { //add filter
    let result =  await fetch(`${baseUrl}/interviews`);
    return result.json()
}

export async function getByJobId(jobId) {
    let result = await fetch(`${baseUrl}/jobs/${jobId}/interviews`)
    return result.json()
}

export async function bookInterview(interviewData) {
    const candidateId = interviewData.candidateId;
    let response = await fetch(`${baseUrl}/candidates/${candidateId}/interviews`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(interviewData)
    })
    let result = response.json();
    return result;
}