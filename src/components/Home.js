import React from 'react'
import { Header } from 'semantic-ui-react'
import logo from '../images/Logo.png'

const Home = (props) => {
  return(
    <div className="homepic">
      <Header as='h1' icon='bed' content='Home' />
      <img alt="logo" src={logo}/>
    </div>
  )
}

export default Home

// <img className="ui fluid image" src="../images/Logo.png" alt="logo"/>
