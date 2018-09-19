import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

import about from './components/about'
import projects from './components/projects'
import footer from'./components/footer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Home Page</h1>
        <li>
          <ul>
            <a id='underline' href='/about'>
            About Me
            </a>
          </ul>
          <ul>
          <a id='underline' href='/projects'>
            Projects
            </a>
          </ul>
        </li>
        <Route path ='/about' component={about} />
        <Route path='/projects' component={projects}/>
      <footer/>
      </div>
      </Router>
    );
  }
}

export default App;
