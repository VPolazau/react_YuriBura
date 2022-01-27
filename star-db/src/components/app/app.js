import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import DummySwapiSwrvice from '../../services/dummy-swapi-service'
import ErrorBoundry from '../error-boundry'
import Header from '../header'
import RandomPlanet from '../random-planet'
import Row from '../row'
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context'
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-components'

import './app.css'

export default class App extends Component {
  swapiService = new DummySwapiService()

  state = {
    showRandomPlanet: true,
  }

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    })
  }

  render() {
    const planet = this.state.showRandomPlanet ? (
      <RandomPlanet />
    ) : null

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className='container stardb-app'>
            <Header />

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />

            <PersonList />
            <StarshipList />
            <PlanetList />

            {/* <Row left={personDetails} right={starshipDetails} /> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}
