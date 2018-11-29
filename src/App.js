import React, { Component, Suspense } from 'react'
import GlobalStyle from './styles/global'
import CurrentWeather from './components/CurrentWeather'

class App extends Component {
  render() {
    return (
      <div>
        <Suspense maxDuration={1000}>
          <CurrentWeather />
        </Suspense>
        <GlobalStyle suppressMultiMountWarning />
      </div>
    )
  }
}

export default App
