import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import DummySwapiService from '../../services/dummy-swapi-service'
import ErrorBoundry from '../error-boundry'
import Header from '../header'
import RandomPlanet from '../random-planet'
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'

import './app.css'

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService
          ? DummySwapiService
          : SwapiService

      return { swapiService: new Service() }
    })
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className='container stardb-app'>
            <Header onServiceChange={this.onServiceChange} />

            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
            
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}
