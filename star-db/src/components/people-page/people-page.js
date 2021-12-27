import React, { Component } from 'react'
import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../error-indicator/error-indicator'
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import './people-page.css'
import Row from '../row'

export default class PeoplePage extends Component {
  swapiService = new SwapiService()

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

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    )

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    )

    return <Row left={itemList} right={personDetails} />
  }
}
