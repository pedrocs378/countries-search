import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	body {
		font-size: 0.875rem;
		background: ${({ theme }) => theme.colors.background};
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font-family: 'Nunito Sans', sans-serif;
		font-weight: 300;
	}

	h1, h2, h3 {
		font-weight: 800;
	}

	button {
		cursor: pointer;
	}
`