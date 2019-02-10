import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import NapList from './containers/NapList'
import Home from './components/Home'
import NapDetails from './components/NapDetails'
import {Route} from 'react-router-dom'

class App extends Component {
  state={
    allNaps: [],
    selectedNapsite: null,
    myNaps: []
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
    let id = parseInt(event.target.dataset.napId)
    let newNap = this.state.allNaps.find(nap => nap.id === id)

    this.setState({
      selectedNapsite: newNap
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar
          link="https://www.sleep.org/articles/how-long-to-nap/"
          color="blue"
          header="NappZone"
        />
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/napsites" render={() => {
          return (
            <NapList
              napsArray={this.state.allNaps}
              onSelectNap={this.onSelectNap}
            />
          )
        }} />
        <Route exact={true} path="/napsites/:id" render={(props) => {
          let napIdInUrl = parseInt(props.match.params.id)
          let nap = this.state.allNaps.find(nap => nap.id === napIdInUrl)
          return (<NapDetails nap={nap} />)
        }} />
      </div>
    )
  }
}

export default App;

//Route for displaying single nap
// <Route exact={true} path="/napsites/:id" render={() => {
//   return (<NapDetails nap={this.state.selectedNapsite} />)
// }} />

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
