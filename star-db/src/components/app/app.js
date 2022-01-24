import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../error-boundry'
import Header from '../header'
import ItemList from '../item-list'
import ItemDetails, { Record } from '../item-details/item-details'
import PeoplePage from '../people-page/people-page'
import RandomPlanet from '../random-planet'
import Row from '../row'
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components'

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

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
      getAllPeople,
      getAllPlanets,
    } = this.swapiService

    return (
      <ErrorBoundry>
        <div className='container stardb-app'>
          <Header />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList>
            { ({name}) => <span>{name}</span> }
          </PersonList>
          <StarshipList>
            { ({name}) => <span>{name}</span> }
          </StarshipList>
          <PlanetList>
            { ({name}) => <span>{name}</span> }
          </PlanetList>


          {/* <Row left={personDetails} right={starshipDetails} /> */}
        </div>
      </ErrorBoundry>
    )
  }
}
