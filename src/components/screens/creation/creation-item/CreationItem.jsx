import styles from './CreationItem.module.scss'
import { CreationForm } from './creation-form/CreationForm'

export const CreationItem = () => {
	return (
		<section className={styles['creation-item']}>
			<div className='main__container'>
				<div className={styles.content}>
					<div className={styles['left-side']}>
						<h2>Ready to get started?</h2>
						<CreationForm />
					</div>
					<div className={styles['right-side']}>
						<img
							src='/public/creation.png'
							alt='creation'
							className={styles.image}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
