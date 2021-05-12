import { FormEvent, InputHTMLAttributes } from 'react'
import { IoSearch } from 'react-icons/io5'
import { BiErrorCircle } from 'react-icons/bi'
import ReactLoading from 'react-loading'
import { useTheme } from 'styled-components'

import { Container } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	isFocused: boolean
	isFilled: boolean
	loading?: boolean
	error?: boolean
	onSubmit?: () => Promise<void>
}

export function SearchInput({ isFilled, isFocused, loading = false, error = false, onSubmit, ...rest }: SearchInputProps) {
	const theme = useTheme()

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

			{loading && (
				<ReactLoading
					type="spinningBubbles"
					height={20}
					width={20}
					color={theme.colors.heading}
				/>
			)}

			{error && (
				<span>
					<BiErrorCircle />
					No countries founded
				</span>
			)}
		</Container>
	)
}