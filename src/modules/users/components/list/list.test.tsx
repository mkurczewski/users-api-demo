import React from "react"
import { renderWithThemeAndStore } from "../../../../utils/render-with-theme-and-store"
import { User } from "../../users.types"
import { List } from "./list.component"

const testUsers = [
  {
    id: 123,
    name: "Name",
    username: "username",
  },
  {
    id: 456,
    name: "Name II",
    username: "username2",
  },
  {
    id: 789,
    name: "Name III",
    username: "username3",
  },
] as User[]

const render = () => renderWithThemeAndStore(<List users={testUsers} />)

test("Users list is rendered as ordered list", () => {
  const { container } = render()
  expect(container.querySelector("ol")).toBeInTheDocument()
})

test("Users list is rendered properly", () => {
  const { getAllByRole } = render()
  expect(getAllByRole("listitem")).toHaveLength(testUsers.length)
})
