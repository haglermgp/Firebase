import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css'

// js files
import Home from './Home'
import SamplesCollection from './js/SamplesCollection'
import UsersCollection from './js/UsersCollection'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/samples-collection" component={SamplesCollection}/>
          <Route path="/users-collection" component={UsersCollection}/>
        </div>
      </Router>
    )
  }

}

export default App;
