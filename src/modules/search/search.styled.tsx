import styled from "styled-components"

export const SearchInput = styled.input.attrs((props) => ({
  ...props,
  type: "text",
  placeholder: "Search for users",
}))`
  width: 100%;
  padding: 0.7rem;
  border-radius: 0.2rem 0 0 0.2rem;
  outline: none;
  font-size: 1.4rem;
  border: solid 0.1rem darkgrey;

  &:focus,
  &:focus-visible {
    border-color: #7c46f3;
  }
`
