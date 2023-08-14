import clsx from 'clsx'
import styles from './CategoryItem.module.scss'

export const CategoryItem = ({ category }) => {
	const nameClass = clsx('category__name', {
		selected: category.isSelected,
	})
	const quantityClass = clsx('category__quantity', {
		selected: category.isSelected,
	})

	return (
		<div className={styles['category-item']}>
			<h4 className={nameClass}>{category.name}</h4>
			<div className={quantityClass}>{category.quantity}</div>
		</div>
	)
}
