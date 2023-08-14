import { HiOutlineHome } from 'react-icons/hi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { Header } from '../../../layout/header/Header'
import styles from './PostDetailPreview.module.scss'

export const PostDetailPreview = ({ post }) => {
	return (
		<section className={styles['post-detail-preview']}>
			<Header isArticles={true} isCreation={false} />
			<div className='main__container'>
				<div className={styles.content}>
					<div className={styles.breadcrumbs}>
						<Link to={'/'} className={styles['icon-home']}>
							<HiOutlineHome />
						</Link>
						<div className={styles['icon-arrow']}>
							<MdOutlineKeyboardArrowRight />
						</div>
						<div className={styles['small-title']}>{post.title}</div>
					</div>
					<h1>{post.title}</h1>
				</div>
			</div>
		</section>
	)
}
