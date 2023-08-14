import styles from './Categories.module.scss'
import { categoriesData } from './Categories.data.js'
import { CategoryItem } from './category-item/CategoryItem'

export const Categories = () => {
	return (
		<div className={styles.categories}>
			<h1>Blog Categories</h1>
			<div className={styles['list-categories']}>
				{categoriesData.map(category => (
					<CategoryItem key={category.id} category={category} />
				))}
			</div>
		</div>
	)
}
