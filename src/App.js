import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import NapList from './containers/NapList'
import About from './components/About'
import {Route} from 'react-router-dom'

class App extends Component {
  state={
    allNaps: [],
    selectedNapsite: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/napsites')
    .then(res => res.json())
    .then(napArray => {
      this.setState({
        allNaps: napArray
      })
    })
  }

  onSelectNap = (event) => {
    console.log("selected")
  }

  render() {
    return (
      <div classname="App">
        <Navbar
          link="https://www.sleep.org/articles/how-long-to-nap/"
          color="blue"
          header="NappZone"
        />
        <Route exact={true} path="/about" component={About}/>
        <Route exact={true} path="/napsites" render={() => {
          return (
            <NapList
              napsArray={this.state.allNaps}
              onSelectNap={this.onSelectNap}
            />
          )
        }}/>
      </div>
    )
  }
}

export default App;

// <NapList
//   napsArray={this.state.allNaps}
//   onSelectNap={this.onSelectNap}
// />

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
