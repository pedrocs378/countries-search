import { memo, useMemo } from 'react'
import Link from 'next/link'
import lodash from 'lodash'

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

	const countryNameNormalized = useMemo(() => {
		return country.name
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, "")
			.toLowerCase()
	}, [country.name])

	return (
		<Link href={`/${countryNameNormalized}`} passHref>
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
	return lodash.isEqual(prevProps.country, nextProps.country)
})