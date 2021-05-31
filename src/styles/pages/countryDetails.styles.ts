import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.main`
	max-width: 1440px;
	margin: 2rem auto;
	margin-bottom: 8rem;
	padding: 0 1rem;
	font-size: 1rem;

	display: flex;
	flex-direction: column;
`

export const ButtonBack = styled.a`
	max-width: 90px;
	height: 2.3rem;

	text-decoration: none;
	color: ${({ theme }) => theme.colors.heading};
	background: ${({ theme }) => theme.colors.shape};
	box-shadow: 0 0 5px 1px ${({ theme }) => {
		return shade(theme.title === 'light' ? 0.1 : 0.4, theme.colors.shape)
	}};

	border-radius: 5px;
	line-height: 20px;
	transition: background-color 0.2s;

	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		margin-right: 0.4rem;
		height: 20px;
		width: 20px;
	}

	&:hover {
		background: ${({ theme }) => shade(0.1, theme.colors.shape)};
	}

	@media (min-width: 720px) {
		max-width: 130px;

		svg {
			margin-right: 0.7rem;
		}
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
				color: ${({ theme }) => theme.colors.text};
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

	> section {
		display: flex;
		flex-direction: column;

		margin-top: 2rem;
		color: ${({ theme }) => theme.colors.heading};	
		
		h3 {
			font-size: 1rem;	
			font-weight: 800;
			margin-bottom: 1.5rem;
			white-space: nowrap;
		}

		> div {
			display: flex;
			flex-wrap: wrap;
			gap: 0.6rem;
		}
	}

	@media (min-width: 720px) {
		width: 100%;
		max-width: 580px;
		margin-top: 0;
		margin-left: 0.5rem;

		> div {
			flex-direction: row;
			justify-content: space-between;
		}

		> section {
			margin-top: 5rem;

			flex-direction: row;

			h3 {
				margin-bottom: 0;
				margin-top: 0.4rem;
				margin-right: 1rem;
			}
		}
	}

	@media (min-width: 1080px) {
	
	}
`

export const BorderCountryButton = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	max-width: 120px;
	padding: 0 1rem;
	height: 2.3rem;

	text-decoration: none;
	white-space: nowrap;

	color: ${({ theme }) => theme.colors.heading};
	background: ${({ theme }) => theme.colors.shape};
	border-radius: 5px;
	
	box-shadow: 0 0 5px 1px ${({ theme }) => {
		return shade(theme.title === 'light' ? 0.1 : 0.4, theme.colors.shape)
	}};

	transition: background-color 0.2s;

	&:hover {
		background: ${({ theme }) => shade(0.1, theme.colors.shape)};
	}
`