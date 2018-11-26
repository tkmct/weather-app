import React, { Component } from 'react'
import GlobalStyle from './styles/global'
import CurrentWeather from './components/CurrentWeather'

class App extends Component {
  render() {
    return (
      <>
        <CurrentWeather />
        <GlobalStyle />
      </>
    )
  }
}

export default App
