/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import ParentApp from 'next/app'

import '@src/css/tailwind.css'
// import { Provider, defaultTheme } from '@adobe/react-spectrum'

class MyApp extends ParentApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      // <Provider theme={defaultTheme}>
      <Component {...pageProps} />
      // </Provider>
    )
  }
}

export default MyApp
