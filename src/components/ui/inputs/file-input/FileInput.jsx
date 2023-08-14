import { useState } from 'react'
import styles from './FileInput.module.scss'

export const FileInput = () => {
	const [file, setFile] = useState('')

	console.log(file)

	return (
		<div className={styles['file-input']}>
			<label htmlFor='imageInput'>Image</label>
			<div className={styles['file-input-container']}>
				<span className={styles['file-input-text']}></span>
				<input
					type='file'
					name='imageInput'
					accept='.png, .jpeg'
					onChange={e => setFile(e.target.value.url)}
					value={file}
					placeholder={file}
				/>
				<span class={styles['file-input-btn']}>Choose file</span>
			</div>
		</div>
	)
}
