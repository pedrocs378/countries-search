import { memo } from 'react'
import Link from 'next/link'

import { Container } from './styles'

interface Country {
	name: string
	populationFormatted: string
	region: string
	flag: string
	capital: string
}

interface CountryCardProps {
	country: Country
}

function CountryCardComponent({ country }: CountryCardProps) {

	return (
		<Link href={`/${country.name}`} passHref>
			<Container>
				<img src={country.flag} alt={country.name} />
				<div>
					<h2>{country.name}</h2>

					<p><strong>Population: </strong> {country.populationFormatted}</p>
					<p><strong>Region: </strong> {country.region}</p>
					<p><strong>Capital: </strong> {country.capital}</p>
				</div>
			</Container>
		</Link>
	)
}

export const CountryCard = memo(CountryCardComponent, (prevProps, nextProps) => {
	return Object.is(prevProps.country, nextProps.country)
})