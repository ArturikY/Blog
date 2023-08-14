import { Footer } from '../../layout/footer/Footer'
import { Preview } from '../../layout/preview/Preview'
import { Subscribe } from '../../layout/subscribe/Subscribe'
import styles from './Articles.module.scss'
import { ArticlesItem } from './articles-item/ArticlesItem'
import { CompanyPosts } from './company-posts/CompanyPosts'
import { Advantages } from '../../ui/advantages/Advantages'

export const Articles = () => {
	return (
		<div className={styles.articles}>
			<Preview
				title={'Blog'}
				text={
					'Our agency has been successfully operating in digital marketing since 2012. We are proud to offer you quality and exemplary service. We help our clients get better results with our creative and data-driven approach to online advertising.'
				}
				layout={<Advantages />}
				background={
					'radial-gradient(175.37% 96.44% at 10% 13.52%,#1e212c 0%,#232441 56.38%,#1e212c 100%)'
				}
				isArticles={true}
				isCreation={false}
			/>
			<CompanyPosts />
			<ArticlesItem />
			<Subscribe isDark={false} />
			<Footer />
		</div>
	)
}
