import styled from 'styled-components'

export const Container = styled.header`
	/* height: 4.375rem; */
	height: 6rem;
	background: ${({ theme }) => theme.colors.shape};
`

export const Content = styled.div`
	height: 100%;
	width: 100%;
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 1rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	h1 {
		color: ${({ theme }) => theme.colors.heading};
		font-size: 1.1rem;
	}

	button {
		display: flex;
		align-items: center;
		background: transparent;
		border: 0;
		color: ${({ theme }) => theme.colors.heading};
		line-height: 16px;
		font-size: 0.8rem;

		svg {
			margin-right: 0.4rem;
			height: 16px;
			width: 16px;
		}
	}
`