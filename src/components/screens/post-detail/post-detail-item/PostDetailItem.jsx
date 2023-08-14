import { BsCalendarCheckFill } from 'react-icons/bs'
import { SiKeystone } from 'react-icons/si'

import { Trending } from '../../articles/articles-item/trending/Trending.jsx'
import styles from './PostDetailItem.module.scss'
import { PostAuthor } from './post-author/PostAuthor'

export const PostDetailItem = ({ post }) => {
	return (
		<section className={styles['post-detail-item']}>
			<div className='main__container'>
				<div className={styles.content}>
					<div className={styles['left-side']}>
						<div className={styles.post__info}>
							<div className={styles.date}>
								<p>Published</p>
								<div className={styles.text}>
									<div className={styles.icon}>
										<BsCalendarCheckFill />
									</div>
									<h3>{post.date}</h3>
								</div>
							</div>
							<div className={styles.category}>
								<p>Category</p>
								<div className={styles.text}>
									<div className={styles.icon}>
										<SiKeystone />
									</div>
									<h3>{post.category}</h3>
								</div>
							</div>
						</div>
						<hr className={styles['diving-line']} />
						<div className={styles.post__content}>
							<h2>{post.description}</h2>
							<img src={post.image} alt={post.title} />
							<main>{post.content}</main>
						</div>
					</div>
					<div className={styles['right-side']}>
						<PostAuthor author={post.author} />
						<Trending />
					</div>
				</div>
			</div>
		</section>
	)
}
