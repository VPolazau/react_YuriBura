import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../error-boundry'
import ErrorButton from '../error-button/error-button'
import Header from '../header'
import ItemDetails from '../item-details'
import PeoplePage from '../people-page'
import RandomPlanet from '../random-planet'
import Row from '../row'
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

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    )

    return (
      <ErrorBoundry>
        <div className='container stardb-app'>
          <Header />
          <Row left={personDetails} right={starshipDetails} />
        </div>
      </ErrorBoundry>
    )
  }
}
