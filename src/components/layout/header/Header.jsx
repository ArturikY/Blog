import { Link } from 'react-router-dom'
import clsx from 'clsx'

import styles from './Header.module.scss'

export const Header = ({ isArticles, isCreation }) => {
	const articlesClass = clsx('header__link', {
		active: isArticles,
	})

	const creationClass = clsx('header__link', {
		active: isCreation,
	})

	return (
		<section className={styles.header}>
			<div className='main__container'>
				<div className={styles.content}>
					<Link to={'/'} className={styles.logo}>
						<img src='/public/logo.png' alt='Logo' />
					</Link>
					<nav className={styles.nav}>
						<ul className={styles.menu}>
							<li>
								<Link to={'/'} className={articlesClass}>
									Articles
								</Link>
							</li>
							<li>
								<Link to={'/creation'} className={creationClass}>
									Creation
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</section>
	)
}
