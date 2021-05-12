import { IoMoonSharp, IoMoonOutline } from 'react-icons/io5'

import { useApptheme } from '../../contexts/AppThemeContext'

import { Container, Content } from './styles'

export function Header() {
	const { theme, toggleTheme } = useApptheme()

	return (
		<Container>
			<Content>
				<h1>Where in the world?</h1>

				<button type="button" onClick={toggleTheme}>
					{theme.title === 'light' ? <IoMoonOutline /> : <IoMoonSharp />}

					Dark Mode
				</button>
			</Content>
		</Container>
	)
}