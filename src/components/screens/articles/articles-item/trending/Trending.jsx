import { useQuery } from 'react-query'

import { PostMini } from '../../../../ui/post/post-mini/PostMini'
import styles from './Trending.module.scss'
import { TrendingPostsService } from '../../../../../services/TrendingPosts.service'

export const Trending = () => {
	const {
		data: trendingPosts,
		isLoading,
		isError,
	} = useQuery('trending-posts', TrendingPostsService.getAll)

	if (isLoading) {
		return <h1 className='server-notification'>Loading...</h1>
	}
	if (isError) {
		return <h1 className='server-notification'>Error!</h1>
	}
	if (!trendingPosts) {
		return <h1 className='server-notification'>Don't have posts</h1>
	}
	return (
		<div className={styles.trending}>
			<h1>Now Trending</h1>
			<div className={styles['list-posts']}>
				{trendingPosts.map(post => (
					<PostMini key={post.id} post={post} />
				))}
			</div>
		</div>
	)
}
