//const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';
const baseUrl = 'http://localhost:5555';

export async function getAll(companyId, date) {
    let result =  await fetch(`${baseUrl}/interviews/${companyId}?date=${date}`);
    return result.json()
}

export async function getByJobId(jobId) {
    let result = await fetch(`${baseUrl}/jobs/${jobId}/interviews`)
    return result.json()
}

export async function getAllByDate(jobId, date){
    let result = await fetch(`${baseUrl}/jobs/${jobId}/interviews?date=${date}`)
    return result.json()
}

/*export async function getByCandidateId(candidateId){
    let result = await fetch(`${baseUrl}/candidates/${candidateId}/interviews`)
    return result.json()
}*/

export async function bookInterview(interviewData) {
    let response = await fetch(`${baseUrl}/interviews`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(interviewData)
    })
    let result = response.json();
    return result;
}