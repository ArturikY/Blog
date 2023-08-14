import axios from 'axios'

export const TrendingPostsService = {
	async getAll() {
		const { data } = await axios.get('http://localhost:4200/trendingPosts')
		return data
	},

	// async getById(id) {
	// 	const response = await axios.get(`http://localhost:4200/posts?id=${id}`)

	// 	return response.data[0]
	// },
}
