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
	max-width: 130px;
	height: 2.3rem;
	border-radius: 2px;
	line-height: 20px;
	box-shadow: 0 5px 8px ${({ theme }) => shade(0.3, theme.colors.shape)};
	transition: background-color 0.2s;

	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		margin-right: 0.7rem;
		height: 20px;
		width: 20px;
	}

	&:hover {
		background: ${({ theme }) => shade(0.1, theme.colors.shape)};
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 4rem;

	img {
		width: 100%;
		max-height: 400px;
	}

	@media (min-width: 720px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		img {
			max-width: 560px;
		}	
	}
`

export const Details = styled.div`
	margin-top: 3rem;

	h1 {
		color: ${({ theme }) => theme.colors.heading};	
		font-size: 1.5rem;
	}

	> div {
		display: flex;
		flex-direction: column;

		section {
			margin-top: 2rem;

			p {
				color: ${({ theme }) => theme.colors.heading};
				font-size: 0.9rem;

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
	}

	@media (min-width: 720px) {
		width: 100%;
		max-width: 580px;
		margin-left: 0.5rem;

		> div {
			flex-direction: row;
			justify-content: space-between;
		}
	}
`