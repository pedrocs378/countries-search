import styled from 'styled-components'

export const Container = styled.select`
	max-width: 200px;
	padding: 1rem;
	border-radius: 5px;
	background: ${({ theme }) => theme.colors.shape};
	border: 0;
	margin-top: 2rem;
	color: ${({ theme }) => theme.colors.heading};

	option {
		border: 0;
		outline: none;
		margin: 0.8rem 1rem;
	}
`