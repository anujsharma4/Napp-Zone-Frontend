import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import NapList from './containers/NapList'
import Home from './components/Home'
import NapDetails from './components/NapDetails'
import {Route, Switch} from 'react-router-dom'
import MyNapList from './containers/MyNapList'

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

  setSelectedNap = (nap) => {
    if (!this.state.myNaps.includes(nap)){
      this.setState({
        myNaps: [...this.state.myNaps, nap]
      })
    }
  }

  pickNap = () => {
    console.log("nap picked")
  }

  render() {
    return (
      <div className="App">
        <Navbar
          link="https://www.sleep.org/articles/how-long-to-nap/"
          color="blue"
          header="NappZone"
        />
        <Route path="/mynaps" render={() => {
          return(
            <MyNapList
              setSelectedNap={this.setSelectedNap}
              myNaps={this.state.myNaps}
            />
          )
        }}/>
        <Switch>
          <Route path="/napsites/:id" render={(props) => {
            let napIdInUrl = parseInt(props.match.params.id)
            let nap = this.state.allNaps.find(nap => nap.id === napIdInUrl)
            return (<NapDetails
              setSelectedNap={this.setSelectedNap}
              nap={nap} />)
          }} />
          <Route path="/napsites" render={() => {
            return (
              <NapList
                napsArray={this.state.allNaps}
                onSelectNap={this.onSelectNap}
                setSelectedNap={this.setSelectedNap}
              />
            )
          }} />
          <Route component={Home}/>
        </Switch>
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
