import styles from './Footer.module.scss'

import { AiOutlineHeart } from 'react-icons/ai'

export const Footer = () => {
	return (
		<section className={styles.footer}>
			<div className='main__container'>
				<div className={styles.content}>
					<p>&#169; All rights reserved. Made with</p>
					<div className={styles.icon}>
						<AiOutlineHeart />
					</div>
					<p>by Createx Studio </p>
				</div>
			</div>
		</section>
	)
}
