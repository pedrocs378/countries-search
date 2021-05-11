import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Select from 'react-select'

import { CountryCard } from "../components/CountryCard";
import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";

import { api } from "../services/api";

import {
  Container,
  SearchContainer,
  FiltersSelect,
  Content,
} from './home.styles'

interface Country {
  numericCode: string
  name: string
  population: number
  populationParsed: string
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

export default function Home({ data }: HomeProps) {
  const [countries, setCountries] = useState<Country[]>(data)
  const [searchText, setSearchText] = useState('')
  const [filter, setFilter] = useState<FilterParams>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function handleSearchInputBlur() {
    if (searchText.trim()) {
      setIsFilled(true)
    } else {
      setIsFilled(false)
    }

    setIsFocused(false)
  }

  function handleSearchInputFocus() {
    setIsFocused(true)
  }

  useEffect(() => {
    if (!searchText.trim()) {
      setCountries(data)
      return
    }

    api
      .get(`/name/${searchText}`)
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

  if (!data) {
    return <div>Carregando...</div>
  }

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
            isFocused={isFocused}
            isFilled={isFilled}
            onFocus={handleSearchInputFocus}
            onBlur={handleSearchInputBlur}
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
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get<Country[]>('all')

  const countries = response.data.map(country => {
    return {
      ...country,
      populationParsed: country.population.toLocaleString()
    }
  })

  return {
    props: {
      data: countries
    },
  }
}
