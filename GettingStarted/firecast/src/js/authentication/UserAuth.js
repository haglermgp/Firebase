import React, { Component } from 'react'
import {Link } from 'react-router-dom'

import * as firebase from 'firebase'

export default class UserCollection extends Component {
  constructor(){
    super()
    this.state = {
      
    }

  }

  componentWillMount () {

  }

  componentDidMount () {

  }

  handleSubmit (e) {
    e.preventDefault()
  
  }

  render() {
    return (
      <div>
        <Link to="/"><button>back!</button> </Link>
          <h5 className="App-title">Users Collection</h5>
        <div>
          <form  onSubmit={this.handleSubmit}>
            {/*<h2>Name  Status: <span style={{color: 'green'}} >{this.state.e_load_status.hotDogStatus}</span> </h2>*/}
            <input type="text" placeholder="First Name" value={this.state.form_first} onChange={(e) => { this.handleStatusName({form_first: e.target.value}) }} /> <br/>
            <input type="text" placeholder="Last Name" value={this.state.form_last} onChange={(e) => { this.handleStatusName({form_last: e.target.value}) }} /> <br/>
            <input type="date" placeholder="Born" value={this.state.form_born} onChange={(e) => { this.handleStatusName({form_born: e.target.value}) }} /> <br/>
            <button >Done</button>
            {/*<button onClick={this.handleLoad} >Load</button>*/}
          </form>
        </div>
    </div>
    );
  }

  handleStatusName (object) {
    this.setState(object)
  }

}
