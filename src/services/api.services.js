class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post)
            })
            return useRequest(request)
        } catch(error) {
            console.error(error)
        }
    }

    async fetchPosts() {
        try {
            const request = new Request(`${this.url}/posts.json`, {
                method: 'get'
            })
            return useRequest(request)
        } catch(error) {
            console.error(error)
        }
    }

    async fetchPostByid(id) {
        try {
            const request = new Request(`${this.url}/posts/${id}.json`, {
                method: 'get'
            })
            return useRequest(request)
        } catch(error) {
            console.error(error)
        }
    }
}

async function useRequest(request) {
    const resonse = await fetch(request)
    return resonse.json()
}

export const apiService = new ApiService('https://wfm-js-3f63f-default-rtdb.firebaseio.com')