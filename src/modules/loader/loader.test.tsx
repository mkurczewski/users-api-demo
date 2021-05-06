import React from "react"
import { renderWithThemeAndStore } from "../../utils/render-with-theme-and-store"
import { Loader } from "./loader.component"

const render = () => renderWithThemeAndStore(<Loader />)

test("Loader renders properly", () => {
  const { getByRole } = render()
  expect(getByRole("img")).toBeVisible()
  expect(getByRole("img")).toHaveAttribute("alt", "Loading data")
})
