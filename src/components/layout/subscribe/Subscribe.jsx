import clsx from 'clsx'
import { EmailInput } from '../../ui/inputs/email-input/EmailInput'
import styles from './Subscribe.module.scss'

export const Subscribe = ({ isDark }) => {
	const titleClass = clsx('subscribe__title', {
		dark: isDark,
	})

	return (
		<section
			className={styles.subscribe}
			style={{ backgroundColor: `${isDark ? '#1E212C' : '#f4f5f6'}` }}
		>
			<div className='main__container'>
				<div className={styles.content}>
					<div className={styles.text}>
						<h2 className={titleClass}>Subsribe to our blog</h2>
						<p>
							And receive latest trends in search, marketing, digital and news.
						</p>
						<EmailInput isDark={isDark} />
					</div>
					<img
						src={`${
							isDark
								? '/public/subscribe-dark.png'
								: '/public/subscribe-light.png'
						}`}
						alt='subscribe'
						className={styles.image}
					/>
				</div>
			</div>
		</section>
	)
}
