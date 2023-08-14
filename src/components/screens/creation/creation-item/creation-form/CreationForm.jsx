import { Checkbox } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { dateNow } from '../../../../../utils/dateNow'
import { randomId } from '../../../../../utils/randomId'
import styles from './CreationForm.module.scss'
import { PersonInputs } from './person-inputs/PersonInputs'
import { PostInputs } from './post-inputs/PostInputs'
import { PostsService } from '../../../../../services/Posts.service'
import { useMutation } from 'react-query'

export const CreationForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const mutation = useMutation(newPost => PostsService.create(newPost))

	const createPost = data => {
		const newPost = {
			id: randomId(),
			category: data.category,
			date: dateNow(),
			author: {
				image: `${data.avatar}`,
				name: `${data.firstName} ${data.lastName}`,
				major: data.major,
			},
			image: `${data.image}`,
			title: data.title,
			description: data.description,
			content: data.content,
		}

		console.log(newPost)

		mutation.mutate(newPost)

		reset()
	}

	return (
		<form
			action='#'
			className={styles.form}
			onSubmit={handleSubmit(createPost)}
		>
			<h3>About you:</h3>
			<PersonInputs register={register} errors={errors} />
			<h3>Post: </h3>
			<PostInputs register={register} errors={errors} />
			<div className={styles.send}>
				<Checkbox
					colorScheme='purple'
					iconSize='1rem'
					defaultChecked
					className={styles.checkbox}
				>
					<span className={styles.checkbox__label}>
						I agree to receive communications from Createx SEO Agency.
					</span>
				</Checkbox>
				<button>
					<span>Create post</span>
				</button>
			</div>
		</form>
	)
}
