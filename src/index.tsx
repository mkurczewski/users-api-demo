import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import App from "./App"
import { store } from "./store"
import { AppThemeProvider } from "./theme-provider"

/*
  Theme is empty for demo purposes.
  It's only to allow styled components to work properly.
*/
export const theme = {}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
