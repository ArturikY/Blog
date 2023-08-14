import styles from './ArticlesItem.module.scss'
import { Categories } from './categories/Categories'
import { ListPosts } from './list-posts/ListPosts'
import { Trending } from './trending/Trending'

export const ArticlesItem = () => {
	return (
		<section className={styles['articles-item']}>
			<div className='main__container'>
				<div className={styles.content}>
					<div className={styles['left-side']}>
						<ListPosts />
					</div>
					<div className={styles['right-side']}>
						<Trending />
					</div>
				</div>
			</div>
		</section>
	)
}
