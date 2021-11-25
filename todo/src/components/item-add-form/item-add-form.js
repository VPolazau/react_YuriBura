import React, { Component } from 'react'
import './item-add-form.css'

export default class ItemAddForm extends Component {
  state = {
    label: '',
  }

  onLabelChange = e => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(e)
    this.props.onItemAdded(this.state.label)
  }

  render() {
    return (
      <form className='item-add-form d-flex' onSubmit={this.onSubmit}>
        <input
          type='text'
          className='form-control'
          onChange={this.onLabelChange}
          placeholder='What needs to be done'
        />
        <button
          className='btn btn-outline-secondary'
          // Так как у нас форма, надо делать через onSubmit выше
          // onClick={}
        >
          Add Item
        </button>
      </form>
    )
  }
}
