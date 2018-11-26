import React, { Component } from 'react'
import GlobalStyle from './styles/global'

class App extends Component {
  render() {
    return (
      <>
        <div className="App" />
        <GlobalStyle suppressMultiMountWarning />
      </>
    )
  }
}

export default App
