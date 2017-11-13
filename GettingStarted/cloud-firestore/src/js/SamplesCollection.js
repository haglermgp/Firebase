import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as firebase from 'firebase'

class SamplesCollection extends Component {
  constructor(){
    super()
    this.state = {
      e_status_sandwich: '',
      docRef: '',
      e_load_status: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStatusName = this.handleStatusName.bind(this)
  }

  componentWillMount () {
    const firestore = firebase.firestore() 
    // const docRef = firestore.collection('samples').doc('sandiwchData').collection('condiments').doc('relish').collection('options').doc(...)
    const v_docRef = firestore.doc('samples/sandwichData')
    this.setState({
      docRef: v_docRef
    })

  }

  componentDidMount () {
    this.state.docRef.onSnapshot((doc) => {
      console.log('doc', doc)
      if (doc && doc.exists) {
        this.setState({e_load_status: doc.data()})
      }
    })

  }

  handleSubmit (e) {
    e.preventDefault()
    console.log('I am going to save ' + this.state.e_status_sandwich + ' to Firestore')

    this.state.docRef.set({
      hotDogStatus: this.state.e_status_sandwich
    }).then( () => {
      console.log('Status saved!!')
    }).catch( (error) => {
      console.log('Got an erro:', error)
    })
  
  }

  // handleLoad (e) {
  //   e.preventDefault()
  //   this.state.docRef.get()
  //     .then( (doc) => {
  //       if (doc && doc.exists) {
  //         this.setState({e_load_status: doc.data() })
  //       }
  //     })
  //     .catch( (error) => {
  //       console.log('Got and error')
  //     })
  // }

  render() {
    return (
      <div className="App">
        <Link to="/"><button>back!</button> </Link>
        <div>
          <h1>Name  Status: <span style={{color: 'green'}} >{this.state.e_load_status.hotDogStatus}</span> </h1>
          <input type="text" placeholder="sandwich status" onChange={this.handleStatusName} />
          <button onClick={this.handleSubmit} >Done</button>
          {/*<button onClick={this.handleLoad} >Load</button>*/}
        </div>
      </div>
    );
  }

  handleStatusName (e) {
    e.preventDefault()
    this.setState({
      e_status_sandwich: e.target.value
    })
  }

}

export default SamplesCollection;
