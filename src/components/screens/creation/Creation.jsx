import { Footer } from '../../layout/footer/Footer'
import { Preview } from '../../layout/preview/Preview'
import styles from './Creation.module.scss'
import { CreationItem } from './creation-item/CreationItem'

export const Creation = () => {
	return (
		<div className={styles.creation}>
			<Preview
				title={'Creation'}
				text={
					'Thoughts, trends and up-to-date news in search and digital marketing. Subsribe to our blog and receive latest news weekly.'
				}
				layout={null}
				background='radial-gradient(175.37% 96.44% at 10% 13.52%,#1e212c 0%,#232441 56.38%,#1e212c 100%)'
				isArticles={false}
				isCreation={true}
			/>
			<CreationItem />
			<Footer />
		</div>
	)
}
