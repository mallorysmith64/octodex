import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <section class="main-menu-left">
            <h2>Octodex</h2>
            <h1>Home</h1>
            <h1>FAQ</h1>
          </section>
          <section class="main-menu-right">
            <h1>Follow us on Twitter</h1>
            <h1>Back to GitHub.com</h1>
          </section>
        </nav>
      </div>
    )
  }
}

export default Nav
