import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav>
        <section class="main-menu-left">
          <h2>Octodex</h2>
          <h1>Home</h1>
          <h1>FAQ</h1>
        </section>
        <section class="main-menu-right">
          <h1 class="main-menu-right">
            <a href="https://twitter.com/githubdesign">Follow us on Twitter</a>
          </h1>
          <h1 class="main-menu-right">
            <a href="https://github.com/">Back to GitHub.com</a>
          </h1>
        </section>
      </nav>
    )
  }
}

export default Nav
