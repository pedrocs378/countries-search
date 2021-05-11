import styled from 'styled-components'

export const Container = styled.div`
	width: 20rem;
	border-radius: 5px;
	overflow: hidden;
	background: ${({ theme }) => theme.colors.shape};

	img {
		width: 100%;
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
`