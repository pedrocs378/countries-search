import styled from 'styled-components'

interface ContainerProps {
	isFocused: boolean
	isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 450px;
	height: 3.2rem;
	background: ${({ theme }) => theme.colors.shape};
	padding: 0 1.2rem;
	border-radius: 5px;
	color: ${({ theme, isFocused, isFilled }) => {
		return isFocused || isFilled ? theme.colors.heading : theme.colors.text
	}};

	svg {
		height: 20px;
		width: 20px;
	}

	input {
		width: 100%;
		height: 100%;
		outline: none;
		padding: 0 1.2rem;
		background: none;
		border: 0;
		color: ${({ theme }) => theme.colors.heading};
		font-weight: 600;
	}

	input::placeholder {
		color: ${({ theme }) => theme.colors.text};
	}
`