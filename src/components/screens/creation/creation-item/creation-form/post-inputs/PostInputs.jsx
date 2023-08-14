import styles from './PostInputs.module.scss'

export const PostInputs = ({ register, errors }) => {
	return (
		<div className={styles['post-inputs']}>
			<div className={styles.input}>
				{errors?.title ? (
					<label htmlFor='titleInput' style={{ color: 'red' }}>
						Title is required!
					</label>
				) : (
					<label htmlFor='titleInput'>Title*</label>
				)}
				<input
					type='text'
					name='titlePostInput'
					placeholder='Title post'
					className={styles['text-input']}
					onChange={e => setData(prev => ({ ...prev, title: e.target.value }))}
					{...register('title', { required: true })}
				/>
			</div>
			<div className={styles.input}>
				{errors?.category ? (
					<label htmlFor='categoryInput' style={{ color: 'red' }}>
						Category is required!
					</label>
				) : (
					<label htmlFor='categoryInput'>Category*</label>
				)}
				<input
					type='text'
					name='categoryPostInput'
					placeholder='Category post'
					className={styles['text-input']}
					onChange={e =>
						setData(prev => ({ ...prev, category: e.target.value }))
					}
					{...register('category', { required: true })}
				/>
			</div>
			<div className={styles.input}>
				{errors?.description ? (
					<label htmlFor='descriptionInput' style={{ color: 'red' }}>
						Description is required!
					</label>
				) : (
					<label htmlFor='descriptionInput'>Description*</label>
				)}
				<input
					type='text'
					name='descriptionPostInput'
					placeholder='Description post'
					className={styles['text-input']}
					{...register('description', { required: true })}
				/>
			</div>
			<div className={styles.input}>
				{errors?.image ? (
					<label htmlFor='imageInput' style={{ color: 'red' }}>
						Image is required!
					</label>
				) : (
					<label htmlFor='imageInput'>Image (link)*</label>
				)}
				<input
					type='text'
					name='imagePostInput'
					placeholder='Image post'
					className={styles['text-input']}
					{...register('image', { required: true })}
				/>
			</div>
			<div className={styles.input}>
				{errors?.content ? (
					<label htmlFor='contentInput' style={{ color: 'red' }}>
						Content is required!
					</label>
				) : (
					<label htmlFor='contentInput'>Content*</label>
				)}
				<textarea
					type='text'
					name='contentPostInput'
					placeholder='Content post'
					className={styles.textarea}
					{...register('content', { required: true })}
				/>
			</div>
		</div>
	)
}
