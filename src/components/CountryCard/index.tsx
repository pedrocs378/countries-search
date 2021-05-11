
import { Container } from './styles'

export function CountryCard() {

	return (
		<Container>
			<img src="https://restcountries.eu/data/umi.svg" alt="USA" />
			<div>
				<h2>United States of America</h2>

				<p><strong>Population: </strong> 323.947,000</p>
				<p><strong>Region: </strong> Americas</p>
				<p><strong>Capital: </strong> Washington, D.C.</p>
			</div>
		</Container>
	)
}