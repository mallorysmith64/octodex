import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <h2 class="navbar-start">
              <a href="https://octodex.github.com/" class="navbar-item">
                Octodex
              </a>
            </h2>
          </div>

          <h2 class="navbar-start">
            <a href="https://octodex.github.com/" class="navbar-item">
              Home
            </a>

            <a href="https://octodex.github.com/faq/" class="navbar-item">
              FAQ
            </a>
          </h2>

          <h2 class="navbar-end">
            <a href="https://twitter.com/githubdesign" class="navbar-item">
              Follow us on Twitter
            </a>

            <a href="https://github.com/" class="navbar-item">
              Back to GitHub.com
            </a>
          </h2>
        </nav>
      </>
    )
  }
}

export default Nav
