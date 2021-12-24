import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../error-indicator/error-indicator'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import './people-page.css'

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 1,
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
          />
        </div>
        <div className='col-md-6'>
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  }
}
