import axios from 'axios'

export const CompanyPostsService = {
	async getAll() {
		const { data } = await axios.get('http://localhost:4200/companyPosts')
		return data
	},

	// async getById(id) {
	// 	const response = await axios.get(`http://localhost:4200/posts?id=${id}`)

	// 	return response.data[0]
	// },
}
