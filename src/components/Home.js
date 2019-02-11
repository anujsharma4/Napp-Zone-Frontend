import React from 'react'
import { Header } from 'semantic-ui-react'
import logo from '../images/Logo.png'

const Home = (props) => {
  return(
    <div className="homepic">
      <div>
      <Header as='h1' icon="bed" className="inverted bed icon" content='We know the optimal nap time is 45 min... but what about the optimal nap zone?' />
      </div>
      <img alt="logo" src={logo}/>
        <video className="background-video" loop muted autoPlay playsInline poster= "https://media.giphy.com/media/GC7C2Fi902BDG/giphy.gif">
          <source src="https://media.giphy.com/media/GC7C2Fi902BDG/giphy.mp4" type="video/mp4"/>
        </video>
    </div>
  )
}

export default Home
