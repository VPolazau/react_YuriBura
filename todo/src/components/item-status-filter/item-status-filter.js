import React, { Component } from 'react'
import './item-status-filter.css'

export default class ItemStatusFilter extends Component {
  // state = {
  //   activeTrigger: false,
  //   doneTrigger: false,
  // }

  // onAll = () => {
  //   console.log('onAll')
  // }

  // onActive = () => {
  //   this.setState({
  //     activeTrigger: !this.state.activeTrigger,
  //   })
  //   console.log('onActive')
  // }

  // onDone = () => {
  //   this.setState({
  //     doneTrigger: !this.state.doneTrigger,
  //   })
  //   console.log('onDone')
  // }

  render() {
    const { onAll, onActive, onDone } = this.props
    // const { activeTrigger, doneTrigger } = this.state
    let doneClass = 'btn btn-outline-secondary btn-done'
    let activeClass = 'btn btn-outline-secondary btn-active'

    // if (activeTrigger) {
    //   activeClass += ' activeStyle'
    //   console.log(activeClass);
    // }

    // if(doneTrigger) {
    //   doneClass += ' activeStyle'
    // }

    return (
      <div className='btn-group'>
        <button
          type='button'
          className='btn btn-info'
          onClick={onAll}
        >
          All
        </button>
        <button
          type='button'
          className={activeClass}
          onClick={onActive}
        >
          Active
        </button>
        <button
          type='button'
          className={doneClass}
          onClick={onDone}
        >
          Done
        </button>
      </div>
    )
  }
}
