import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import { api } from '../../services/api'

import {
	Container,
	ButtonBack,
	Content,
	Details,
	BorderCountryButton,
} from '../../styles/pages/countryDetails.styles'
import { normalizeName } from '../../utils/normalizeName'

interface BorderFormatted {
	name: string
	slug: string
}

interface Currency {
	code: string
	name: string
}

interface Language {
	name: string
	nativeName: string
}

interface Country {
	name: string
	nativeName: string
	population: number
	populationFormatted: string
	bordersFormatted: BorderFormatted[]
	region: string
	subregion: string
	capital: string
	topLevelDomain: string[]
	currencies: Currency[]
	languages: Language[]
	borders: string[]
	flag: string
}

interface CountryDetailsProps {
	data: Country
}

export default function CountryDetails({ data }: CountryDetailsProps) {

	return (
		<>
			<Head>
				<title>{data.name}</title>
			</Head>

			<Header />

			<Container>
				<Link href="/" passHref>
					<ButtonBack>
						<BsArrowLeft />
						Back
					</ButtonBack>
				</Link>
				<Content>
					<img src={data.flag} alt={data.name} />

					<Details>
						<h1>{data.name}</h1>

						<div>
							<section>
								<p><strong>Native Name: </strong>{data.nativeName}</p>
								<p><strong>Population: </strong>{data.populationFormatted}</p>
								<p><strong>Region: </strong>{data.region}</p>
								<p><strong>Sub Region: </strong>{data.subregion}</p>
								<p><strong>Capital: </strong>{data.capital}</p>
							</section>

							<section>
								<p>
									<strong>Top Level Domain: </strong>
									{data.topLevelDomain.map(domain => (
										<span key={domain}>{domain}</span>
									))}
								</p>
								<p>
									<strong>Currencies: </strong>
									{data.currencies.map(currency => (
										<span key={currency.code}>{currency.name}</span>
									))}
								</p>
								<p>
									<strong>Languages: </strong>
									{data.languages.map(language => (
										<span key={language.name}>{language.name}</span>
									))}
								</p>
							</section>
						</div>

						{data.bordersFormatted.length > 0 && (
							<section>
								<h3>Border Countries:</h3>
								<div>
									{data.bordersFormatted.map(country => {
										return (
											<Link key={country.name} href={`/country/${country.slug}`} passHref>
												<BorderCountryButton>
													{country.name}
												</BorderCountryButton>
											</Link>
										)
									})}
								</div>
							</section>
						)}
					</Details>
				</Content>
			</Container>

			<Footer />
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await api.get<{ name: string, population: number }[]>('/all')

	const paths = response.data
		.filter(country => country.population >= 10000000)
		.map(country => {
			const nameNormalized = normalizeName(country.name)

			return {
				params: { name: nameNormalized }
			}
		})

	return {
		paths,
		fallback: 'blocking'
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params
	try {
		const countriesResponse = await api.get<{ name: string, nativeName: string, alpha3Code: string }[]>('/all')
		const response = await api.get<Country[]>(`/name/${name}?fullText=true`)

		const countriesCodes = countriesResponse.data
		const [country] = response.data

		const bordersFormatted = country.borders.map(borderCode => {
			const borderCountry = countriesCodes.find(code => code.alpha3Code === borderCode)

			return {
				name: borderCountry.nativeName,
				slug: normalizeName(borderCountry.name)
			}
		})

		return {
			props: {
				data: {
					...country,
					populationFormatted: country.population.toLocaleString(),
					bordersFormatted
				}
			},
			revalidate: 60 * 60 * 24 * 7
		}
	} catch {
		return {
			props: {},
			notFound: true
		}
	}
}