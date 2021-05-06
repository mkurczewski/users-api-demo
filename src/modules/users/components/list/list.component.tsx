import React, { FunctionComponent } from "react"
import { ListWrapper } from "./list.styled"
import { User } from "../../users.types"
import { ListItem } from "../list-item/list-item.component"

interface Props {
  users: User[]
}

export const List: FunctionComponent<Props> = ({ users }) => (
  <ListWrapper>
    {users.map((user) => (
      <ListItem user={user} key={user.id} />
    ))}
  </ListWrapper>
)
