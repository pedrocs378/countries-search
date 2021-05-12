import { shade } from 'polished'
import styled from 'styled-components'

interface ContainerProps {
	isFocused: boolean
	isFilled: boolean
}

export const Container = styled.form<ContainerProps>`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 450px;
	height: 3.2rem;
	padding: 0 1.2rem;
	border-radius: 5px;
	background: ${({ theme }) => theme.colors.shape};

	box-shadow: 0 0 5px 1px ${({ theme }) => {
		return shade(theme.title === 'light' ? 0.1 : 0.3, theme.colors.shape)
	}};
	
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