//const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';
const baseUrl = 'http://localhost:5555';

export const register = (name, email, password) => {
    return fetch(`${baseUrl}/company/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })
        .then(res => res.json())
}

export const login = async (email, password) => {
    let res = await fetch (`${baseUrl}/company/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    let jsonResult = await res.json();

    if (res.ok){
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
}

export const logout = (token) => {
    return fetch(`${baseUrl}/company/logout`, {
        headers: {
            'X-Authorization': token
        }
    })
}