import React from 'react'
import { Header } from 'semantic-ui-react'
import logo from '../images/Logo.png'

const Home = (props) => {
  return(
    <div className="homepic">
      <Header as='h1' icon='bed' content='Home' />
      <img alt="logo" src={logo}/>
        <video className="background-video" loop muted autoplay playsinline poster= "https://media.giphy.com/media/GC7C2Fi902BDG/giphy.gif">
          <source src="https://media.giphy.com/media/GC7C2Fi902BDG/giphy.mp4" type="video/mp4"/>
        </video>
    </div>
  )
}

export default Home

// <img className="ui fluid image" src="../images/Logo.png" alt="logo"/>
