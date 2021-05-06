import React, { FunctionComponent, useEffect, useState } from "react"
import { List } from "./components/list/list.component"
import { Loader } from "../loader/loader.component"
import { User } from "./users.types"

interface Props {
  users: User[]
  searchPhrase: string
}

export const Users: FunctionComponent<Props> = ({ users, searchPhrase }) => {
  const [loadingState, setLoadingState] = useState(true)

  const filteredUsers = users.filter((user) => {
    return searchPhrase === ""
      ? true
      : user.name.toLowerCase().includes(searchPhrase.toLowerCase())
  })

  useEffect(() => {
    if (users.length) {
      setLoadingState(false)
    }
  }, [users])

  return <>{loadingState ? <Loader /> : <List users={filteredUsers} />}</>
}
