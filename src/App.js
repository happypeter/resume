import React, { Component } from 'react'
import Navbar1 from './components/Navbar/Navbar1'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar1 />
        {/* <Router>
            <div>
              <Route path='/about' component={Navbar} />
            </div>
          </Router> */}
      </div>
    );
  }
}

export default App;
