import { Header } from '../header/Header'
import styles from './Preview.module.scss'

export const Preview = ({
	title,
	text,
	layout,
	background,
	isArticles,
	isCreation,
}) => {
	return (
		<section className={styles.preview} style={{ background: `${background}` }}>
			<Header isArticles={isArticles} isCreation={isCreation} />
			<div className='main__container'>
				<div className={styles.content}>
					<div className={styles.text}>
						<h1>{title}</h1>
						<main>{text}</main>
					</div>
					<div className={styles.layout}>{layout}</div>
				</div>
			</div>
		</section>
	)
}
