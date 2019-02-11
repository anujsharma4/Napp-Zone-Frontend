import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/Navbar'
import NapList from './containers/NapList'
import Home from './components/Home'
import NapDetails from './components/NapDetails'
import {Route, Switch} from 'react-router-dom'
import MyNapList from './containers/MyNapList'
import Login from "./containers/Login"
import { Button, ButtonToolbar } from "react-bootstrap";

class App extends Component {
  state={
    allNaps: [],
    selectedNapsite: null,
    myNaps: [],
    modalShow: false
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
    } else {
      alert("Already added!")
    }
  }

  pickNap = () => {
    console.log("nap picked")
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="App">
        <Navbar
          link="https://www.sleep.org/articles/how-long-to-nap/"
          color= "orange"
          header="NappZone"
        />
        <Switch>
          <Route path="/napsites/:id" render={(props) => {
            let napIdInUrl = parseInt(props.match.params.id)
            let nap = this.state.allNaps.find(nap => nap.id === napIdInUrl)
            return (<NapDetails
              setSelectedNap={this.setSelectedNap}
              nap={nap} />)
          }} />
          <Route path="/mynaps" render={() => {
            return(
              <MyNapList
                setSelectedNap={this.setSelectedNap}
                myNaps={this.state.myNaps}
              />
            )
          }}/>
          <Route path="/napsites" render={() => {
            return (
              <NapList
                napsArray={this.state.allNaps}
                onSelectNap={this.onSelectNap}
                setSelectedNap={this.setSelectedNap}
              />
            )
          }} />
          <ButtonToolbar>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch vertically centered modal
        </Button>

        <Login
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
          // <Route path="/login" component={Login} />
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
