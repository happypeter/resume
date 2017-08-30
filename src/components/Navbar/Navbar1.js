import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'
import './Navbar1.css'
class Navbar1 extends Component{
  render(){

    return(
      <Navbar inverse collapseOnSelect className='nav-wrap'>
      <Navbar.Header className='nav-header'>
        <Navbar.Brand className='nav-brand-logo'>
          <img src={require('../../images/personx-logo-2.png')} style={{'transform':'translate(2,2)'}}/>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse className='nav-header'>
        <Nav className='nav-link-wrap' pullRight>
          <NavItem eventKey={1} href="#"><i className="material-icons">person</i>ABOUT</NavItem>
          <NavItem eventKey={2} href="#"><i className="material-icons">description</i>RESUME</NavItem>
          <NavItem eventKey={3} href="#"><i className="material-icons settings">settings</i>SERVICES</NavItem>
          <NavItem eventKey={4} href="#"><i className="material-icons">work</i>PORTFOLIO</NavItem>
          <NavItem eventKey={5} href="#"><i className="material-icons">supervisor_account</i>TEAM</NavItem>
          <NavItem eventKey={6} href="#"><i className="material-icons">share</i>SOCIAL</NavItem>
          <NavItem eventKey={7} href="#"><i className="material-icons">assignment</i>BLOG</NavItem>
          <NavItem eventKey={8} href="#"><i className="material-icons">email</i>CONTACT</NavItem>
          {/* <i className="material-icons">email</i> */}
          <NavDropdown eventKey={9} title="MORE PAGES" id="basic-nav-dropdown">
            <MenuItem eventKey={9.1}>ABOUT</MenuItem>
            <MenuItem eventKey={9.2}>FOOTER 2</MenuItem>
            <MenuItem eventKey={9.3}>PORTFOLIO PAGES</MenuItem>
            <MenuItem eventKey={9.4}>BLOG PAGES</MenuItem>
            <MenuItem eventKey={9.5}>CONTACT PAGES</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}
export default Navbar1
