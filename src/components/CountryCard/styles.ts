import styled from 'styled-components'

export const Container = styled.div`
	width: 20rem;
	height: 21.875rem;
	border-radius: 5px;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.shape};

	img {
		width: 100%;
		max-height: 55%;
	}

	div {
		padding: 2rem 1.5rem 3rem;

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

	& + div {
		margin-top: 2rem;
	}

	@media (min-width: 720px) {
		width: calc((100% / 4) - 3rem);
		margin-bottom: 5rem;
		margin-right: 4rem;

		&:nth-child(4n) {
			margin-right: 0;
		}

		div {
			padding: 1.4rem 1.5rem;

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

		& + div {
			margin-top: 0;
		}
	}
`