import React from 'react'
// import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/app'

import reducer from './reducer'

const store = createStore(reducer)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
