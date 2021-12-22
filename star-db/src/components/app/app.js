import React, { Component } from 'react'
import ErrorButton from '../error-button/error-button'
import ErrorIndicator from '../error-indicator/error-indicator'
import Header from '../header'
import PeoplePage from '../people-page'
import RandomPlanet from '../random-planet'
// import PlanetDetails from '../planet-details'
// import StarshipDetails from '../starship-details'
import './app.css'



export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false,
  }

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    })
  }

  

  componentDidCatch() {
    console.log('componentDidCatch()')
    this.setState({ hasError: true })
  }

  render() {
    if(this.state.hasError){
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? (
      <RandomPlanet />
    ) : null

    return (
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
        <PeoplePage />
        <PeoplePage />
        {/* <PlanetDetails />
        <StarshipDetails /> */}
      </div>
    )
  }
}
