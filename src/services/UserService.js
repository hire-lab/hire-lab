const baseUrl = 'https://hire-lab-rest-api.herokuapp.com';
//const baseUrl = 'http://localhost:5555';

export const register = (email, name, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, name, password})
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