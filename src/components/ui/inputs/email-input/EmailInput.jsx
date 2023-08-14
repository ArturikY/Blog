import { Checkbox } from '@chakra-ui/react'
import clsx from 'clsx'

import styles from './EmailInput.module.scss'

export const EmailInput = ({ isDark }) => {
	const labelClass = clsx('email-input__label', {
		dark: isDark,
	})

	const inputClass = clsx('email-input', {
		dark: isDark,
	})

	const checkboxClass = clsx('agreement-checkbox__label', {
		dark: isDark,
	})

	return (
		<form action='#' className={styles.form}>
			<label htmlFor='emailInput' className={labelClass}>
				Email
			</label>
			<div className={styles['input-group']}>
				<input
					name='emailInput'
					type='email'
					className={inputClass}
					placeholder='Your working email'
				/>
				<button className={styles.btn} onClick={e => e.preventDefault()}>
					<span>Subscribe</span>
				</button>
			</div>
			<Checkbox
				colorScheme='purple'
				iconSize='1rem'
				defaultChecked
				className={styles.checkbox}
			>
				<span className={checkboxClass}>
					I agree to receive communications from Createx SEO Agency.
				</span>
			</Checkbox>
		</form>
	)
}
