import axios from "axios";

export default  class PostServise {
    static async getAll(limit = 10,page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getByID(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`+id)
        return response
    }

    static async getCommentsByPostId(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }
}