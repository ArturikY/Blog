import styles from './PersonInputs.module.scss'

export const PersonInputs = ({ register, errors }) => {
	return (
		<div className={styles['person-inputs']}>
			<div className={styles.input}>
				{errors?.firstname ? (
					<label htmlFor='firstNameInput' style={{ color: 'red' }}>
						First Name is required!
					</label>
				) : (
					<label htmlFor='firstNameInput'>First Name*</label>
				)}
				<input
					type='text'
					name='firstNameInput'
					placeholder='Your first name'
					className={styles['text-input']}
					{...register('firstName', { required: true })}
				/>
			</div>
			<div className={styles.input}>
				{errors?.lastname ? (
					<label htmlFor='lastNameInput' style={{ color: 'red' }}>
						Last Name is required!
					</label>
				) : (
					<label htmlFor='lastNameInput'>Last Name*</label>
				)}
				<input
					type='text'
					name='lastNameInput'
					placeholder='Your last name'
					className={styles['text-input']}
					{...register('lastName', { required: true })}
				/>
			</div>
			<div className={styles.input}>
				{errors?.major ? (
					<label htmlFor='majorInput' style={{ color: 'red' }}>
						Major is required!
					</label>
				) : (
					<label htmlFor='majorInput'>Major*</label>
				)}
				<input
					type='text'
					name='majorInput'
					placeholder='Your major'
					className={styles['text-input']}
					{...register('major', { required: true })}
				/>
			</div>
			<div className={styles.input}>
				{errors?.avatar ? (
					<label htmlFor='avatarInput' style={{ color: 'red' }}>
						Avatar is required!
					</label>
				) : (
					<label htmlFor='avatarInput'>Avatar (link)*</label>
				)}
				<input
					type='text'
					name='avatarInput'
					placeholder='Your avatar'
					className={styles['text-input']}
					{...register('avatar', { required: true })}
				/>
			</div>
		</div>
	)
}
