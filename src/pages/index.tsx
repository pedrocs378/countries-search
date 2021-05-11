import Head from "next/head";
import { useState } from "react";

import { FilterSelect } from "../components/FilterSelect";
import { Header } from "../components/Header";
import { SearchInput } from "../components/SearchInput";

import { Container, SearchContainer } from './home.styles'

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

          <FilterSelect />
        </SearchContainer>
      </Container>
    </>
  )
}
