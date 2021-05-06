import React, { ChangeEvent, FunctionComponent } from "react"
import { SearchInput } from "./search.styled"

interface Props {
  onSearch: (searchPhrase: string) => void
}

export const Search: FunctionComponent<Props> = ({ onSearch }) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return <SearchInput onChange={onChange} />
}
