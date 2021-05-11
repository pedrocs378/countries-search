import styled from 'styled-components'
import Select from 'react-select'

export const Container = styled.main`
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 1rem;
`

export const SearchContainer = styled.div`
	margin: 1.5rem 0;
	
	display: flex;
	flex-direction: column;

	@media (min-width: 720px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		margin: 2.5rem 0;
	}
`

export const FiltersSelect = styled(Select)`
	margin-top: 2.5rem;
	width: 100%;
	max-width: 220px;

	.react-select__control {
		border: 0;
		background: ${({ theme }) => theme.colors.shape};
		cursor: pointer;
		padding: 0 1rem;
		height: 3.2rem;
	}

	.react-select__control--is-focused {
		background: ${({ theme }) => theme.colors.shape};
		box-shadow: none;
	}

	.react-select__indicator-separator {
		display: none;
	}

	.react-select__dropdown-indicator {
		svg {
			height: 16px;
			width: 16px;
		}
	}

	.react-select__single-value {
		color: ${({ theme }) => theme.colors.heading};
	}

	.react-select__menu {
		background-color: ${({ theme }) => theme.colors.shape};
		color: ${({ theme }) => theme.colors.heading};
		padding: 0.3rem 0;
	}

	.react-select__option {
		cursor: pointer;
		padding: 0.6rem 2rem;
	}

	.react-select__option--is-focused {
		background-color: ${({ theme }) => theme.colors.background};
	}

	.react-select__option--is-selected {
		background-color: ${({ theme }) => theme.colors.background};
	}

	@media (min-width: 720px) {
		margin-top: 0;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-bottom: 2rem;

	@media (min-width: 720px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`
