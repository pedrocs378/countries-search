import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

import { Header } from '../components/Header'

import { api } from '../services/api'

import {
	Container,
	ButtonBack,
	Content,
	Details,
} from '../styles/pages/countryDetails.styles'

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

						<section>
							<p><strong>Native Name: </strong>{data.nativeName}</p>
							<p><strong>Population: </strong>{data.population}</p>
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
					</Details>
				</Content>
			</Container>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { country_name } = params
	const response = await api.get(`/name/${country_name}?fullText=true`)

	return {
		props: {
			data: response.data[0]
		}
	}
}