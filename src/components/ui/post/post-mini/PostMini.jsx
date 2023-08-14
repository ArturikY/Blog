import { BiTimeFive } from 'react-icons/bi'
import styles from './PostMini.module.scss'
import { Link } from 'react-router-dom'

export const PostMini = ({ post }) => {
	return (
		<div className={styles['post-mini']}>
			<img className={styles.image} src={post.image} alt={post.title} />
			<div className={styles.text}>
				<div className={styles.date}>
					<div className={styles.date__logo}>
						<BiTimeFive />
					</div>
					<p>{post.date}</p>
				</div>
				<Link to={`/posts/${post.id}`} className={styles.title}>
					{post.title}
				</Link>
			</div>
		</div>
	)
}
