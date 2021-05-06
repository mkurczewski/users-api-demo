import styled from "styled-components"

export const Name = styled.span`
  font-size: 1.6rem;
`

export const Nick = styled.span`
  font-size: 1.4rem;
  color: darkgrey;
  margin-left: 1rem;
`

export const ListItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  &:before {
    min-width: 2rem;
    font-size: 1.4rem;
    color: darkgrey;
    counter-increment: user;
    content: counter(user) ".";
    margin-right: 0.5rem;
    margin-bottom: 0.1rem;
  }
`
