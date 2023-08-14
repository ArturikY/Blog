import clsx from 'clsx'
import { BiTimeFive } from 'react-icons/bi'
import { VscAccount } from 'react-icons/vsc'

import { Link } from 'react-router-dom'
import styles from './Post.module.scss'

export const Post = ({
	post,
	widthImage,
	heightImage,
	isLabel,
	isDescription,
}) => {
	const labelClass = clsx('post__label', {
		active: isLabel,
	})
	const descriptionClass = clsx('post__description', {
		active: isDescription,
	})

	return (
		<div className={styles.post}>
			<div className={labelClass}>
				<p>Company Post</p>
			</div>
			<img
				src={post.image}
				alt={post.title}
				className={styles.image}
				style={{ width: `${widthImage}px`, height: `${heightImage}px` }}
			/>
			<div className={styles.head}>
				<div className={styles.head_element}>
					<p>{post.category}</p>
				</div>
				<hr />
				<div className={styles.head_element}>
					<div className={styles.head_element_logo}>
						<BiTimeFive />
					</div>
					<p>{post.date}</p>
				</div>
				<hr />
				<div className={styles.head_element}>
					<div className={styles.head_element_logo}>
						<VscAccount />
					</div>
					<p>By {post.author.name}</p>
				</div>
			</div>
			<h3 className={styles.title}>{post.title}</h3>
			<p className={descriptionClass}>{post.description}</p>
			<Link className={styles.link} to={`/posts/${post.id}`}>
				Read more
			</Link>
		</div>
	)
}
