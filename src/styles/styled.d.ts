import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		title: 'dark' | 'light'

		colors: {
			background: string
			shape: string
			heading: string
			text: string
		}
	}
}