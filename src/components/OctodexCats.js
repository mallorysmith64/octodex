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
import scuba from './images/scubatocat.png'
import vinyl from './images/vinyltocat.png'
import ten from './images/tentocats.jpg'
import snow from './images/snowtocat_final.jpg'
import justice from './images/justicetocat.jpg'
import black from './images/blacktocats.png'
import nic from './images/saint_nictocat.jpg'
import mona from './images/mona-lovelace.jpg'

const Cats = [
  //1st fintechtocat
  {
    number: '#148:',
    name: 'Fintechtocat',
    imageUrl: Fin,
    imageAlt: 'Fin tech octodex cat'
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
    imageAlt: 'Fireman octodex cat called sentry'
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
    imageAlt: 'Boxing octodex cat'
  },

  //7th surftocat
  {
    number: '#142:',
    name: 'Surftocat',
    imageUrl: surf,
    imageAlt: 'Surfing octodex cat'
  },

  //8th hulatocat
  {
    number: '#141:',
    name: 'Hulatocat',
    imageUrl: hula,
    imageAlt: 'Hula dancer octodex cat'
  },

  //9th Scubatocat
  {
    number: '#140:',
    name: 'Scubatocat',
    imageUrl: scuba,
    imageAlt: 'Scuba octodex cat'
  },

  //10th Vinyltocat
  {
    number: '#139:',
    name: 'Vinyltocat',
    imageUrl: vinyl,
    imageAlt: 'Vinyl octodex cat'
  },

  //11th Tentocats
  {
    number: '#138:',
    name: 'Tentocats',
    imageUrl: ten,
    imageAlt: 'Ten octodex cat'
  },

  //12th Snowtocat
  {
    number: '#137:',
    name: 'Snowtocat',
    imageUrl: snow,
    imageAlt: 'Snow octodex cat'
  },

  //13th Justicetocat
  {
    number: '#136:',
    name: 'Justicetocat',
    imageUrl: justice,
    imageAlt: 'Justice octodex cat'
  },

  //14th Blacktocats
  {
    number: '#135:',
    name: 'Blacktocats',
    imageUrl: black,
    imageAlt: 'Black octodex cats'
  },

  //15th Saint Nictocat
  {
    number: '#134:',
    name: 'Saint Nictocat',
    imageUrl: nic,
    imageAlt: 'Saint octodex cat'
  },

  //16th Mona Lovelace
  {
    number: '#133:',
    name: 'Mona Lovelace',
    imageUrl: mona,
    imageAlt: 'Mona Lovelace octodex cat'
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
