import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './styles.css'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="font-sans bg-gray-50 min-h-screen"></div>
      </Router>
    </Provider>
  )
}

export default App
