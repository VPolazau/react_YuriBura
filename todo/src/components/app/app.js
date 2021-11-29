import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

import './app.css'

export default class App extends Component {
  maxId = 100

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    }
  }
  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id)

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1),
      ]

      return { todoData: newArray }
    })
  }

  addItem = text => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem]

      return { todoData: newArray }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id)

    const oldItem = arr[idx]
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      }
    })
  }

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      }
    })
  }

  searchFilter = text => {
    const length = text.length
    const similar = this.state.todoData.find(
      el => el.label.toUpperCase().slice(0, length) === text.toUpperCase()
    )
    const idx = this.state.todoData.findIndex(el => el.id === similar.id)
    if (similar) {
      this.setState(({ todoData }) => {
        return {
          todoData: [similar, ...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
        }
      })
    }
  }

  onAll = () => {
    console.log(this.state.todoData)
    this.setState(({ todoData, buff }) => {
      return {
        todoData: buff,
      }
    })
  }

  onActive = () => {
    const activeLabel = this.state.todoData.filter(
      el => el.done === false
    )
    this.setState(({ todoData, buff }) => {
      return {
        buff: todoData,
        todoData: activeLabel,
      }
    })
  }

  onDone = () => {
    const doneLabel = this.state.todoData.filter(el => el.done)
    this.setState(({ todoData, buff }) => {
      return {
        buff: todoData,
        todoData: doneLabel,
      }
    })
    console.log(this.state.buff);
  }

  render() {
    const { todoData } = this.state
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <div className='todo-app container'>
        <AppHeader toDo={todoCount} done={doneCount} />

        <div className='top-panel d-flex'>
          <SearchPanel searchFilter={this.searchFilter} />
          <ItemStatusFilter
            onAll={this.onAll}
            onActive={this.onActive}
            onDone={this.onDone}
          />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    )
  }
}
