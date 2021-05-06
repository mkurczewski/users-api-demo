import React, { FunctionComponent } from "react"
import { ListItemWrapper, Name, Nick } from "./list-item.styled"
import { User } from "../../users.types"

interface Props {
  user: User
}

export const ListItem: FunctionComponent<Props> = ({ user }) => (
  <ListItemWrapper>
    <Name>{user.name}</Name>
    <Nick>@{user.username}</Nick>
  </ListItemWrapper>
)
