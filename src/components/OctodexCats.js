import React, { Component } from 'react'

import boxer from './images/boxertocat_octodex.jpg'
import Brenna from './images/Brennatocat.png'
import film from './images/filmtocats.png'
import Fin from './images/Fintechtocat.png'
import puddle from './images/puddle_jumper_octodex.jpg'
import Sentry from './images/Sentrytocat_octodex.jpg'
import surf from './images/surftocat.png'
import hula from './images/hula_loop_octodex03.gif'

class OctodexCats extends Component {
  render() {
    return (
      <main>
        <img src={Fin} alt="fin tech octodex cat" />
        <img src={boxer} alt="boxing octodex cat" />
        <img src={Brenna} alt="Brenna the octodex cat" />
        <img src={film} alt="Film octodex cat" />
        <img src={puddle} alt="" />
        <img src={Sentry} alt="Fireman octodex cat named sentry" />
        <img src={surf} alt="surfer octodex cat" />
        <img src={hula} alt="octodex cat hula dancing" />
      </main>
    )
  }
}

export default OctodexCats
