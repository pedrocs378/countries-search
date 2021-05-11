import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.main`
	max-width: 1440px;
	margin: 2rem auto;
	padding: 0 1rem;
	font-size: 1rem;

	display: flex;
	flex-direction: column;
`

export const ButtonBack = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.heading};
	background: ${({ theme }) => theme.colors.shape};
	max-width: 110px;
	height: 2.5rem;
	border-radius: 2px;
	line-height: 20px;
	box-shadow: 0 5px 8px ${({ theme }) => shade(0.3, theme.colors.shape)};

	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		margin-right: 0.5rem;
		height: 20px;
		width: 20px;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 4rem;

	img {
		width: 100%;
	}
`

export const Details = styled.div`
	margin-top: 3rem;

	h1 {
		color: ${({ theme }) => theme.colors.heading};	
		font-size: 1.5rem;
	}

	section {
		margin-top: 2rem;

		p {
			color: ${({ theme }) => theme.colors.heading};

			strong {
				font-weight: 600;
				color: ${({ theme }) => theme.colors.heading};
			}

			span {

				& + span {
					&::before {
						content: ', '
					}
				}
			}

			& + p {
				margin-top: 0.8rem;
			}
		}
	}
`