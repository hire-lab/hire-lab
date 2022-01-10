import * as request from './requester';
//const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';
const baseUrl = 'http://localhost:5555';

export async function getAll() {
    let result =  await fetch(`${baseUrl}/interviews`);
    return result.json()
}

/*export const bookInterview = (jobId, candidateId) => {
    request.post(`${baseUrl}/interviews`, {jobId, candidateId})
}*/