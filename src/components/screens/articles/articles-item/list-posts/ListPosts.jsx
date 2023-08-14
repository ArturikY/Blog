import { useState } from 'react'
import { useQuery } from 'react-query'

import { PostsService } from '../../../../../services/Posts.service'
import { Post } from '../../../../ui/post/Post'
import styles from './ListPosts.module.scss'
import { Pagination } from './pagination/Pagination'

export const ListPosts = () => {
	const [page, setPage] = useState(1)
	const {
		data: posts,
		isLoading,
		isError,
	} = useQuery(['posts', page], () => PostsService.getAll(page), {
		keepPreviousData: true,
	})

	if (isLoading) {
		return <h1 className='server-notification'>Loading...</h1>
	}
	if (isError) {
		return <h1 className='server-notification'>Error!</h1>
	}
	if (!posts) {
		return <h1 className='server-notification'>Don't have posts</h1>
	}

	return (
		<>
			<div className={styles['list-posts']}>
				{posts.data.map(post => (
					<div className={styles['post-item']} key={post.id}>
						<Post
							post={post}
							widthImage={390}
							heightImage={300}
							isLabel={false}
							isDescription={true}
						/>
					</div>
				))}
			</div>
			<Pagination
				page={page}
				setPage={setPage}
				quantity={posts.headers['x-total-count']}
			/>
		</>
	)
}
