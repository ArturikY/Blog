import { IoBriefcaseOutline } from 'react-icons/io5'
import { TbSpeakerphone } from 'react-icons/tb'
import { FaComputer } from 'react-icons/fa6'

import styles from './Advantages.module.scss'

export const Advantages = () => {
	return (
		<div className={styles.advantages}>
			<div className={styles.element}>
				<div className={styles.icon}>
					<IoBriefcaseOutline />
				</div>
				<p>SEO Content Strategy</p>
			</div>
			<hr />
			<div className={styles.element}>
				<div className={styles.icon}>
					<TbSpeakerphone />
				</div>
				<p>Content Marketing</p>
			</div>
			<hr />
			<div className={styles.element}>
				<div className={styles.icon}>
					<FaComputer />
				</div>
				<p>Website & Social Media Marketing</p>
			</div>
		</div>
	)
}
