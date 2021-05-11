import { memo } from 'react'

import { Container } from './styles'

interface Country {
	name: string
	populationParsed: string
	region: string
	flag: string
	capital: string
}

interface CountryCardProps {
	country: Country
}

function CountryCardComponent({ country }: CountryCardProps) {

	return (
		<Container>
			<img src={country.flag} alt={country.name} />
			<div>
				<h2>{country.name}</h2>

				<p><strong>Population: </strong> {country.populationParsed}</p>
				<p><strong>Region: </strong> {country.region}</p>
				<p><strong>Capital: </strong> {country.capital}</p>
			</div>
		</Container>
	)
}

export const CountryCard = memo(CountryCardComponent, (prevProps, nextProps) => {
	return Object.is(prevProps.country, nextProps.country)
})