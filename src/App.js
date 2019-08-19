import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'
import Nav from './components/Nav'
import OctodexCats from './components/OctodexCats'

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
