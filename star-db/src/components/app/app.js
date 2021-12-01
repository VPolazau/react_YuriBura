import React from 'react'

import Header from '../header'
import ItemList from '../item-list'
import RandomPlanet from '../random-planet'
import PersonDetails from '../person-details'
// import PlanetDetails from '../planet-details'
// import StarshipDetails from '../starship-details'

import './app.css'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <RandomPlanet />

      <ItemList />
      <PersonDetails />
      {/* <PlanetDetails />
      <StarshipDetails /> */}
    </div>
  )
}

export default App
