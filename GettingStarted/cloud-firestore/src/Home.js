import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Home extends Component {


  render() {
    return (
      <div >
        <h3 style={{color: 'blue'}} >This is a guide of the Firebase Cloud - Firestore</h3>

        <ul className='menu' >
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/samples-collection">Samples Collection</Link></li>
          <li><Link to="/users-collection">UsersCollection</Link></li>
        </ul>

      </div>
    )
  }

}
