import { IoMoonSharp, IoMoonOutline } from 'react-icons/io5'
import { useTheme } from 'styled-components'

import { Container, Content } from './styles'

export function Header() {
	const theme = useTheme()

	return (
		<Container>
			<Content>
				<h1>Where in the world?</h1>

				<button type="button">
					{theme.title === 'light' ? <IoMoonOutline /> : <IoMoonSharp />}

					Dark Mode
				</button>
			</Content>
		</Container>
	)
}