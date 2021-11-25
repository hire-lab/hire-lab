const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';

export async function getAll() {
    let result =  await fetch(`${baseUrl}/candidates`);
    return result.json()
}

export async function getOne(id) {
    let result = await fetch(`${baseUrl}/candidates/${id}`);
    return result.json()
}