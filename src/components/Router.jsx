import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Articles } from './screens/articles/Articles.jsx'
import { Creation } from './screens/creation/Creation.jsx'
import { PostDetail } from './screens/post-detail/PostDetail.jsx'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Articles />} path='/' />
				<Route element={<Creation />} path='/creation' />
				<Route element={<PostDetail />} path='/posts/:id' />

				<Route path='*' element={<h1>Not found</h1>} />
			</Routes>
		</BrowserRouter>
	)
}
