import { InputHTMLAttributes } from 'react'
import { IoSearch } from 'react-icons/io5'

import { Container } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	isFocused: boolean
	isFilled: boolean
}

export function SearchInput({ isFilled, isFocused, ...rest }: SearchInputProps) {

	return (
		<Container isFocused={isFocused} isFilled={isFilled}>
			<IoSearch />

			<input
				type="text"
				placeholder="Search for a country..."
				{...rest}
			/>
		</Container>
	)
}