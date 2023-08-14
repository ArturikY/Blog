import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import { isDisabledBtn } from '../../../../../../utils/isDisabledBtn'
import styles from './Pagination.module.scss'

export const Pagination = ({ page, setPage, quantity }) => {
	return (
		<div className={styles.pagination}>
			<button onClick={() => setPage(prev => prev - 1)} disabled={!page}>
				<div className={styles.btn}>
					<div className={styles.icon}>
						<BsArrowLeft />
					</div>
					<p>Prev</p>
				</div>
			</button>
			<button
				onClick={() => setPage(prev => prev + 1)}
				disabled={isDisabledBtn(quantity, page)}
			>
				<div className={styles.btn}>
					<p>Next</p>
					<div className={styles.icon}>
						<BsArrowRight />
					</div>
				</div>
			</button>
		</div>
	)
}
