import { FormEvent, InputHTMLAttributes, useRef, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { BiErrorCircle } from 'react-icons/bi'
import ReactLoading from 'react-loading'
import ReactTooltip from 'react-tooltip'
import { useTheme } from 'styled-components'

import { Container } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	loading?: boolean
	error?: boolean
	onSubmit?: () => Promise<void>
}

export function SearchInput({ loading = false, error = false, onSubmit, ...rest }: SearchInputProps) {
	const inputRef = useRef<HTMLInputElement>(null)
	const [isFocused, setIsFocused] = useState(false)
	const [isFilled, setIsFilled] = useState(false)

	const theme = useTheme()

	function handleInputBlur() {
		setIsFocused(false)

		setIsFilled(!!inputRef.current.value.trim())
	}

	function handleInputFocus() {
		setIsFocused(true)
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		onSubmit && await onSubmit()
	}

	return (
		<Container
			onSubmit={handleSubmit}
			isFocused={isFocused}
			isFilled={isFilled}
		>
			<IoSearch />

			<input
				ref={inputRef}
				type="text"
				name="country"
				placeholder="Search for a country..."
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
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