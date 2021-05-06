import React from "react"
import { Users } from "./users.component"
import { renderWithThemeAndStore } from "../../utils/render-with-theme-and-store"
import { User } from "./users.types"

const testUsers = [
  {
    id: 123,
    name: "A C",
    username: "username",
  },
  {
    id: 456,
    name: "B C",
    username: "username2",
  },
  {
    id: 789,
    name: "B D",
    username: "username3",
  },
] as User[]

const render = (searchPhrase: string = "", users = testUsers) => {
  return renderWithThemeAndStore(
    <Users users={users} searchPhrase={searchPhrase} />
  )
}

test("Loader is displayed when no users are available", () => {
  const { getByAltText } = render("", [])
  expect(getByAltText("Loading data")).toBeVisible()
})

test("No loader is displayed when users are available", () => {
  const { queryByAltText } = render("")
  expect(queryByAltText("Loading data")).not.toBeInTheDocument()
})

test("Users list is rendered properly", () => {
  const { getAllByRole } = render()
  expect(getAllByRole("listitem")).toHaveLength(testUsers.length)
})

test.each([
  ["A", 1],
  ["B", 2],
  ["C", 2],
  [" ", 3],
])("Users list is filtered properly", (search, expectedLength) => {
  const { getAllByRole } = render(search, testUsers)
  expect(getAllByRole("listitem")).toHaveLength(expectedLength)
})
