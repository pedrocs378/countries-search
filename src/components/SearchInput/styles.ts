import { shade } from 'polished'
import styled, { keyframes } from 'styled-components'

interface ContainerProps {
	isFocused: boolean
	isFilled: boolean
}

const errorAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-45%);
	}

	90% {
		opacity: 1;
	}

	100% {
		transform: translateY(0%);
	}
`

export const Container = styled.form<ContainerProps>`
	position: relative;

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
		padding-left: 1.2rem;
		padding-right: 0.5rem;
		background: none;
		border: 0;
		color: ${({ theme }) => theme.colors.heading};
		font-weight: 600;
	}

	input::placeholder {
		color: ${({ theme }) => theme.colors.text};
	}

	span {
		position: absolute;
		bottom: -1.48rem;

		display: flex;
		align-items: center;

		font-size: 0.7rem;
		line-height: 0.7rem;
		color: #E33D3D;

		animation: ${errorAnimation} 600ms;

		svg {
			height: 16px;
			width: 16px;
			margin-right: 0.3rem;	
		}
	}
`