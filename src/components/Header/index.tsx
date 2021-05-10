import { IoMoonSharp } from 'react-icons/io5'

import { Container, Content } from './styles'

export function Header() {

	return (
		<Container>
			<Content>
				<h1>Where in the world?</h1>

				<button type="button">
					<IoMoonSharp />

					Dark Mode
				</button>
			</Content>
		</Container>
	)
}