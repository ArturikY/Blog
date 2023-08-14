import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PostsService } from '../../../services/Posts.service'
import { Footer } from '../../layout/footer/Footer'
import { Subscribe } from '../../layout/subscribe/Subscribe'
import styles from './PostDetail.module.scss'
import { PostDetailItem } from './post-detail-item/PostDetailItem'
import { PostDetailPreview } from './post-detail-preview/PostDetailPreview'

export const PostDetail = () => {
	const { id } = useParams()
	const [post, setPost] = useState({})

	useEffect(() => {
		if (!id) return
		const fetchData = async () => {
			const data = await PostsService.getById(id)

			setPost(data)
		}

		fetchData()
	}, [id])

	if (!post.title) return <h2>Loading...</h2>

	return (
		<div className={styles['post-detail']}>
			<PostDetailPreview post={post} />
			<PostDetailItem post={post} />
			<Subscribe isDark={true} />
			<Footer />
		</div>
	)
}
