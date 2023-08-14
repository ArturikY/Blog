import styles from './SearchInput.module.scss'

export const SearchInput = () => {
	return (
		<form action='#' className={styles.form}>
			<input
				type='search'
				className={styles.input}
				placeholder='Search articles'
			/>
			<button className={styles.btn}>
				<span>Search</span>
			</button>
		</form>
	)
}
