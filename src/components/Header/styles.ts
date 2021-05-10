import styled from 'styled-components'

export const Container = styled.header`
	height: 4.375rem;
	background: ${({ theme }) => theme.colors.shape};
`

export const Content = styled.div`
	height: 100%;
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 5px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	h1 {
		color: ${({ theme }) => theme.colors.heading};
		font-size: 1.4rem;
	}

	button {
		display: flex;
		align-items: center;
		background: transparent;
		border: 0;
		color: ${({ theme }) => theme.colors.heading};
		line-height: 18px;
		font-weight: 600;

		svg {
			margin-right: 0.4rem;
			height: 18px;
			width: 18px;
		}
	}
`