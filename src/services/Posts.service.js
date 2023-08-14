import axios from 'axios'

export const PostsService = {
	async getAll(page = 1) {
		const { data, headers } = await axios.get(
			`http://localhost:4200/posts?_page=${page}&_limit=4`
		)
		return { data, headers }
	},

	async getById(id) {
		const response = await axios.get(`http://localhost:4200/posts?id=${id}`)

		return response.data[0]
	},

	async create(post) {
		return axios.post(`http://localhost:4200/posts`, post)
	},
}
