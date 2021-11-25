import React, { Component } from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {

  onSearchChange = e => {
    this.props.searchFilter(e.target.value)
  }

  render() {
    return (
      <input
        type='text'
        className='form-control search-input'
        placeholder='Type to search'
        onChange={this.onSearchChange}
      />
    )
  }
}
