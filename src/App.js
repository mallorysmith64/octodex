import React, { Component } from 'react'
import Nav from './components/Nav'
import OctodexCats from './components/OctodexCats'
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <section>
        <Nav />
        <OctodexCats />
      </section>
    )
  }
}

export default App
