const API_URL = 'https://reqres.in/api'

async function request(endpoint, payload) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1',
        },
        body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.error || 'Что-то пошло не так')
    }

    return data
}

export function loginUser(credentials) {
    return request('login', credentials)
}

export function registerUser(credentials) {
    return request('register', credentials)
}
