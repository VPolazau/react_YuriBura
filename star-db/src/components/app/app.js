import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import ErrorBoundry from '../error-boundry'
import Header from '../header'
import ItemDetails, { Record } from '../item-details/item-details'
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

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field='gender' label='Gender' />
        <Record field='birthYear' label='Age' />
        <Record field='eyeColor' label='Eye Color' />
      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails
        itemId={9}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field='model' label='Model' />
        <Record field='length' label='Length' />
        <Record field='costInCredits' label='Cost' />
      </ItemDetails>
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
