import React, { FunctionComponent, useEffect, useState } from "react"
import { Search } from "./modules/search/search.component"
import { connect, useDispatch } from "react-redux"
import { fetchAllUsers } from "./modules/users/store/users"
import { Users } from "./modules/users/users.component"
import { AppState } from "./store"
import { User } from "./modules/users/users.types"

interface Props {
  users: User[]
}

const App: FunctionComponent<Props> = ({ users }) => {
  const [searchPhrase, setSearchPhrase] = useState("")
  const dispatch = useDispatch()

  const onSearch = (search: string) => {
    setSearchPhrase(search)
  }

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <main>
      <Search onSearch={onSearch} />
      <Users users={users} searchPhrase={searchPhrase} />
    </main>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    users: state.users.items,
  }
}

export default connect(mapStateToProps)(App)
