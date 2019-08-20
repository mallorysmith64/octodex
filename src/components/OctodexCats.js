import React, { Component } from 'react'
import Cat from './Cat'

import Fin from './images/Fintechtocat.png'
import Brenna from './images/Brennatocat.png'
import film from './images/filmtocats.png'
import boxer from './images/boxertocat_octodex.jpg'
import puddle from './images/puddle_jumper_octodex.jpg'
import Sentry from './images/Sentrytocat_octodex.jpg'
import surf from './images/surftocat.png'
import hula from './images/hula_loop_octodex03.gif'

const Cats = [
  //1st fintechtocat
  {
    number: '#148:',
    name: 'Fintechtocat',
    imageUrl: Fin,
    imageAlt: 'fin tech octodex cat'
  },
  //2nd brennatocat
  {
    number: '#147:',
    name: 'Brennatocat',
    imageUrl: Brenna,
    imageAlt: 'Brenna the octodex cat'
  },
  //3rd filmtocats
  {
    number: '#146:',
    name: 'Filmtocats',
    imageUrl: film,
    imageAlt: 'Film octodex cat'
  },
  //4th sentrytocat fireman
  {
    number: '#145:',
    name: 'Sentrytocat',
    imageUrl: Sentry,
    imageAlt: 'fireman octodex cat called sentry'
  },
  //5th umbrellatocat
  {
    number: '#144:',
    name: 'Umbrellatocat',
    imageUrl: puddle,
    imageAlt: 'Umbrella octodex cat jumping over puddle'
  },
  //6th boxertocat
  {
    number: '#143:',
    name: 'Boxertocat',
    imageUrl: boxer,
    imageAlt: 'boxing octodex cat'
  },
  //7th surftocat
  {
    number: '#142:',
    name: 'Surftocat',
    imageUrl: surf,
    imageAlt: 'surfer octodex cat'
  },
  //8th hulatocat
  {
    number: '#141:',
    name: 'Hulatocat',
    imageUrl: hula,
    imageAlt: 'octodex cat hula dancing'
  }
]
class OctodexCats extends Component {
  render() {
    return (
      <ul className="photo-container">
        {Cats.map((cat, key) => {
          return (
            <Cat //this was imported
              number={cat.number}
              name={cat.name}
              imageUrl={cat.imageUrl}
              imageAlt={cat.imageAlt}
              key={key}
            />
          )
        })}
      </ul>
    )
  }
}
export default OctodexCats
