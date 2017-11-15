import React, { Component } from 'react'
import {Link } from 'react-router-dom'

import * as firebase from 'firebase'

export default class UserCollection extends Component {
  constructor(){
    super()
    this.state = {
      // form values
      form_first: '',
      form_last: '',
      form_born: '',

      // general config
      e_status_sandwich: '',
      DB: '',
      e_load_status: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStatusName = this.handleStatusName.bind(this)
  }

  componentWillMount () {
    const db = firebase.firestore() 
    // const DB = firestore.collection('samples').doc('sandiwchData').collection('condiments').doc('relish').collection('options').doc(...)
    const v_docRef = db.collection('users')
    this.setState({
      DB: v_docRef
    })

  }

  componentDidMount () {
    this.state.DB.get()
      .then((doc) => {
        this.setState({
          e_load_status: doc
        })
      })

  }

  handleSubmit (e) {
    e.preventDefault()
    console.log('I am going to save ' + this.state.e_status_sandwich + ' to Firestore')

    this.state.DB.add({
      fist: this.state.form_first,
      last: this.state.form_last,
      born: this.state.form_born
    }).then( (docRef) => {
      console.log('Document written with ID', docRef.id)
    }).catch( (error) => {
      console.log('Error adding document:', error)
    })
  
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
{/*        <div>
          <span><b>List of User</b></span>
          <ListUsers dataProp={this.state.e_load_status}/>
        </div>
*/}      </div>
    );
  }

  handleStatusName (object) {
    this.setState(object)
  }

}


// const ListUsers = (props) => {
//   debugger
//   props ? 
//   return props.dataProp.forEach((data, index) => { 
//     <div key={index} >
//       <span>{data.id}</span>
//     </div>
//   }) : 'upss!, we dont have user :('
// }