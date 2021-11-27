const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';

export async function getAll(){
    return fetch(`${baseUrl}/jobs`)
        .then(res => res.json())
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