import * as React from 'react'
import App, { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { setupStore } from '../store'
// import 'sanitize.css'
// import '~antd/dist/antd.min.css'

const store = setupStore()
const theme = {}

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default MyApp
