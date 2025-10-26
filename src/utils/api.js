export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`);
        if (!response.ok) {
            throw new Error('Помилка мережевого запиту');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};


export const createPost = (payload) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                ...payload,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
}

export const updatePost = async (id, payload) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id,
            title: payload.title,
            body: payload.body,
            userId: 1
        }),
        headers: {'Content-type': 'application/json; charset=UTF-8'},
    });
}


