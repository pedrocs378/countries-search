import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

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

interface HomeProps {
  countries: Country[]
}

const filters = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
]

export default function Home({ countries }: HomeProps) {
  const [searchText, setSearchText] = useState('')
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

  if (!countries) {
    return
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
            options={filters}
            isSearchable={false}
            defaultValue={{ value: '', label: 'Filter by Region' }}
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
      countries
    }
  }
}
