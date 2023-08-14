import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styles from './PostAuthor.module.scss'

export const PostAuthor = ({ author }) => {
	return (
		<div className={styles.author}>
			<h3>Author</h3>
			<div className={styles.info}>
				<img src={author.image} alt={author.image} />
				<div>
					<h4>{author.name}</h4>
					<p>{author.major}</p>
					<div className={styles['social-links']}>
						<Link to='/' className={styles.link}>
							<BsInstagram />
						</Link>
						<Link to='/' className={styles.link_bi}>
							<BiLogoFacebook />
						</Link>
						<Link to='/' className={styles.link_bi}>
							<BiLogoLinkedin />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
