const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-9',
    headers: {
        authorization: '11d55ed6-d048-452d-9cbb-a99fbc35748b',
        'Content-Type': 'application/json'
    }
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const getUser = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    })
        .then(checkResponse)

}

export const getCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })
        .then(checkResponse)
}

export const patchProfile = (name, about) => {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name,
            about
        })
    })
        .then(checkResponse)
}

export function postCard(elementObj) {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
        method: 'POST',
        body: JSON.stringify({
            name: elementObj.name,
            link: elementObj.link
        })
    })
        .then(checkResponse)
}

export function deleteCard(id) {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        headers: config.headers,
        method: 'DELETE',
    })
        .then(checkResponse)
}

export function putLike(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        headers: config.headers,
        method: 'PUT',
    })
        .then(checkResponse)
}

export function delLike(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        headers: config.headers,
        method: 'DELETE',
    })
        .then(checkResponse)
}

export const patchAvatar = (link) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: link
        })
    })
        .then(checkResponse)
}
