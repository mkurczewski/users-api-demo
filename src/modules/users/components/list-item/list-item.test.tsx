import React from "react"
import { renderWithThemeAndStore } from "../../../../utils/render-with-theme-and-store"
import { ListItem } from "./list-item.component"
import { User } from "../../users.types"

const testUser = {
  name: "Name",
  username: "username",
} as User

const render = () => renderWithThemeAndStore(<ListItem user={testUser} />)

test("User name is rendered properly", () => {
  const { getByText } = render()
  expect(getByText(testUser.name)).toBeVisible()
})

test("User nick is rendered properly", () => {
  const { getByText } = render()
  expect(getByText(`@${testUser.username}`)).toBeVisible()
})
