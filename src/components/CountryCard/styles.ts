import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.a`
	width: 20rem;
	height: 25rem;
	border-radius: 5px;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.shape};
	box-shadow: 0 0 5px 1px ${({ theme }) => {
		return shade(theme.title === 'light' ? 0.1 : 0.3, theme.colors.shape)
	}};
	text-decoration: none;

	display: flex;
	flex-direction: column;

	img {
		width: 100%;
		max-height: 58%;
	}

	div {
		padding: 1.5rem;
		margin: auto 0 2rem;

		h2 {
			color: ${({ theme }) => theme.colors.heading};
			font-size: 1.3rem;
			margin-bottom: 1.3rem;
		}

		p {
			font-size: 0.9rem;
			color: ${({ theme }) => theme.colors.text};
			letter-spacing: 0.6px;

			strong {
				font-weight: 600;
				color: ${({ theme }) => theme.colors.heading};
			}

			& + p {
				margin-top: 0.7rem;
			}
		}
	}

	& + a {
		margin-top: 2rem;
	}

	@media (min-width: 720px) {
		width: calc((100% / 3) - 3rem);
		height: 23rem;
		margin-bottom: 5rem;
		margin-right: 4rem;
		transition: transform 0.3s;

		&:nth-child(3n) {
			margin-right: 0;
		}

		div {
			padding: 0 1.5rem;

			h2 {
				font-size: 1.07rem;
				margin-bottom: 1.1rem;
			}

			p {
				font-size: 0.76rem;

				& + p {
					margin-top: 0.5rem;
				}
			}
		}

		& + a {
			margin-top: 0;
		}

		&:hover {
			transform: translateY(-1.5%);
		}
	}

	@media (min-width: 1080px) {
		width: calc((100% / 4) - 3rem);

		&:nth-child(3n) {
			margin-right: 4rem;
		}

		&:nth-child(4n) {
			margin-right: 0;
		}
	}
`