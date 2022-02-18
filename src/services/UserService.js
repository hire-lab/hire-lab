import * as request from './requester';
//const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';
const baseUrl = 'http://localhost:5555';

export const register = (email, name, cv, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, name, cv, password})
    })
        .then(res => res.json())
}

export const login = async (email, password) => {
    let res = await fetch (`${baseUrl}/users/login`, {
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
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token
        }
    })
}

export async function getOne(id) {
    let result = await fetch(`${baseUrl}/users/${id}`);
    return result.json()
}

export const update = (userId, userData) => request.put(`${baseUrl}/users/${userId}`, userData)