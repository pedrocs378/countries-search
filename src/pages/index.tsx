import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { CountryCard } from "../components/CountryCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";

import { api } from "../services/api";

import {
  Container,
  SearchContainer,
  FiltersSelect,
  Content,
} from '../styles/pages/home.styles'

interface Country {
  numericCode: string
  name: string
  population: number
  populationFormatted: string
  region: string
  flag: string
  capital: string
}

interface FilterParams {
  value: string
  label: string
}

interface HomeProps {
  data: Country[]
}

const filters = [
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
] as FilterParams[]

let searchTimeout: NodeJS.Timeout

export default function Home({ data }: HomeProps) {
  const [countries, setCountries] = useState<Country[]>(data)
  const [filter, setFilter] = useState<FilterParams>(null)
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isErrored, setIsErrored] = useState(false)

  useEffect(() => {
    clearTimeout(searchTimeout)
    setIsLoading(true)
    setIsErrored(false)

    if (!searchText.trim()) {
      setCountries(data)
      setIsLoading(false)
      setIsErrored(false)

      return
    }

    searchTimeout = setTimeout(() => {
      api
        .get(`/name/${searchText}`)
        .then(response => {
          const countriesTransformed = response.data.map(country => {
            return {
              ...country,
              populationFormatted: country.population.toLocaleString()
            }
          })

          setCountries(countriesTransformed)
        })
        .catch(() => {
          setCountries(data)
          setIsErrored(true)
        })
        .finally(() => setIsLoading(false))
    }, 1000)

  }, [searchText])

  useEffect(() => {
    if (!filter) {
      setCountries(data)
      return
    }

    api
      .get(`/region/${filter.value}`)
      .then(response => {
        const countriesTransformed = response.data.map(country => {
          return {
            ...country,
            populationParsed: country.population.toLocaleString()
          }
        })

        setCountries(countriesTransformed)
      })
      .catch(() => setCountries(data))
  }, [filter])

  return (
    <>
      <Head>
        <title>Countries Search</title>
      </Head>

      <Header />

      <Container>
        <SearchContainer>
          <SearchInput
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            loading={isLoading}
            error={isErrored}
          />

          <FiltersSelect
            classNamePrefix="react-select"
            isSearchable={false}
            isClearable={true}
            placeholder="Filter by Region"
            options={filters}
            value={filter}
            onChange={(event) => setFilter(event)}
          />
        </SearchContainer>

        <Content>
          {countries.map(country => {
            return <CountryCard key={country.numericCode} country={country} />
          })}
        </Content>
      </Container>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<Country[]>('all')

  const countries = response.data
    .filter(country => country.population > 10000)
    .map(country => {
      return {
        ...country,
        populationFormatted: country.population.toLocaleString()
      }
    })

  return {
    props: {
      data: countries,
    },
    revalidate: 60 * 60 * 24 * 7
  }
}
