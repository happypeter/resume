import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Link } from 'react-router-dom'
// import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import './Navbar.css'

class Navbar extends Component{
  render(){
    return(
      <div className='navbar-wrap'>
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src={require('../../images/personx-logo-2.png')} style={{'transform':'translate(2,2)'}}/>
          </div>
          <div className="navbar-collapse">
            <Router>
            <ul>
              <li className="nav-item">
                <Link to='/about' >
                  <span className='nav-item-link'>ABOUT</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' >
                  <span className='nav-item-link'>ABOUT</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' >
                  <span className='nav-item-link'>ABOUT</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' >
                  <span className='nav-item-link'>ABOUT</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' >
                  <span className='nav-item-link'>ABOUT</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' >
                  <span className='nav-item-link'>ABOUT</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' >
                  <span className='nav-item-link'>ABOUT</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' >
                  <span className='nav-item-link'>ABOUT</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' >
                  <span className='nav-item-link'>ABOUT</span>
                </Link>
              </li>




            </ul>
          </Router>
          </div>
        </div>
        {/* <i className="material-icons settings">settings</i>
        <i className="material-icons menu">menu</i> */}
      </div>
    )
  }
}
export default Navbar
