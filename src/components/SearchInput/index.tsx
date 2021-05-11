import { FormEvent, InputHTMLAttributes } from 'react'
import { IoSearch } from 'react-icons/io5'

import { Container } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	isFocused: boolean
	isFilled: boolean
	onSubmit?: () => Promise<void>
}

export function SearchInput({ isFilled, isFocused, onSubmit, ...rest }: SearchInputProps) {

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		onSubmit && await onSubmit()
	}

	return (
		<Container onSubmit={handleSubmit} isFocused={isFocused} isFilled={isFilled}>
			<IoSearch />

			<input
				type="text"
				placeholder="Search for a country..."
				{...rest}
			/>
		</Container>
	)
}