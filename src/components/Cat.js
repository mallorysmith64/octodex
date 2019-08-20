import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imageUrl} alt={this.props.imageAlt} height={600} />
        <h2>{this.props.number}</h2>
        <h2>{this.props.name}</h2>
      </li>
    )
  }
}

export default Cat
