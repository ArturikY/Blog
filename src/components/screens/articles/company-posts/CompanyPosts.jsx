import { useQuery } from 'react-query'

import { CompanyPostsService } from '../../../../services/CompanyPosts.service'
import { Post } from '../../../ui/post/Post.jsx'
import styles from './CompanyPosts.module.scss'

export const CompanyPosts = () => {
	const {
		data: companyPosts,
		isLoading,
		isError,
	} = useQuery('company-posts', CompanyPostsService.getAll)

	if (isLoading) {
		return <h1 className='server-notification'>Loading...</h1>
	}
	if (isError) {
		return <h1 className='server-notification'>Error!</h1>
	}
	if (!companyPosts) {
		return <h1 className='server-notification'>Don't have posts</h1>
	}

	return (
		<section className={styles['company-posts']}>
			<div className='main__container'>
				<div className={styles.content}>
					{companyPosts.map(post => (
						<div className={styles['post-item']} key={post.id}>
							<Post
								post={post}
								widthImage={600}
								heightImage={360}
								isLabel={true}
								isDescription={false}
							/>
						</div>
					))}
				</div>
				<hr />
			</div>
		</section>
	)
}
