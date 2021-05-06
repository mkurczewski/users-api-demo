import React, { ComponentProps } from "react"
import { Search } from "./search.component"
import { renderWithThemeAndStore } from "../../utils/render-with-theme-and-store"
import { fireEvent } from "@testing-library/react"

const render = (
  props: ComponentProps<typeof Search> = { onSearch: jest.fn }
) => {
  return renderWithThemeAndStore(<Search {...props} />)
}

test("Search renders properly", () => {
  const { getByRole } = render()
  expect(getByRole("textbox")).toBeVisible()
  expect(getByRole("textbox")).toHaveAttribute("type", "text")
})

test("Search works properly", () => {
  const onSearch = jest.fn()
  const { getByRole } = render({ onSearch })
  const input = getByRole("textbox")

  expect(onSearch).not.toBeCalled()
  fireEvent.change(input, { target: { value: "some text" } })
  expect(onSearch).toBeCalledWith("some text")
})
