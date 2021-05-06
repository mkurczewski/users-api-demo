import React, { FunctionComponent } from "react"
import { LoaderImage, LoaderWrapper } from "./loader.styled"
import loaderSvg from "./assets/loader.svg"

export const Loader: FunctionComponent = () => {
  return (
    <LoaderWrapper>
      <LoaderImage src={loaderSvg} alt="Loading data" />
    </LoaderWrapper>
  )
}
