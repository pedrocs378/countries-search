import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.footer`
	height: 5rem;
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 1rem;

	display: flex;
	align-items: center;
	justify-content: center;

	p {
		color: ${({ theme }) => theme.colors.text};
		font-weight: 600;

		a {
			font-weight: 800;
			text-decoration: none;
			color: ${({ theme }) => theme.colors.heading};
			transition: color 0.2s;

			&::before {
				content: ' ';
			}

			&:hover {
				color: ${({ theme }) => shade(0.2, theme.colors.heading)};
			}
		}
	}
`