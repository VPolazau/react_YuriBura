import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../error-boundry'
import ErrorButton from '../error-button/error-button'
import Header from '../header'
import PeoplePage from '../people-page'
import RandomPlanet from '../random-planet'
import './app.css'

export default class App extends Component {
  swapiService = new SwapiService()

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
        <div className='container stardb-app'>
          <Header />
          {planet}

          <div className='row mb2 button-row'>
            <button
              className='toggle-planet btn btn-warning btn-lg'
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>

          <PeoplePage />

          {/* <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={item => item.name}
            />
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div> */}

          {/* <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={item => item.name}
            />
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div> */}

          {/* <PlanetDetails />
        <StarshipDetails /> */}
        </div>
      </ErrorBoundry>
    )
  }
}
