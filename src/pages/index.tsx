import Head from "next/head";
import { useState } from "react";

import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";

import {
  Container,
  SearchContainer,
  FiltersSelect,
  Content,
} from './home.styles'

const filters = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' },
]

export default function Home() {
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

        </Content>
      </Container>
    </>
  )
}
