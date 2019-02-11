import React from 'react'
import logo from '../images/SleepingGuy.png';
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return(
    <div className={`ui inverted ${props.color} menu`}>
        <a className="item" href={props.link} >
          <h2 className="ui header">
          <img src={logo} alt="logo" />
            <div className="content">{props.header}</div>
            <div className="sub header">{props.tagline}</div>
          </h2>
        </a>
        <Link to="/" className="item">Home</Link>
        <Link to="/napsites" className="item">Napsites</Link>
        <Link to="/mynaps" className="item">MyNaps</Link>
    </div>
  )
}

export default Navbar


  // <img src={logo} width="25" height="50" alt="logo" />

            // <i className={`${props.icon} icon`}></i>


// <Link to="/about">
//   <a className="item">
//    <h2 className="ui header">
//      <i className={`${props.icon} icon`}></i>
//      <div className="content">{props.title}</div>
//      <div className="sub header">{props.subtitle}</div>
//    </h2>
//  </a>
//  </Link>
//  <Link className="item" to="/about">About</Link>
//  <Link className="item" to="/paintings">Paintings</Link>
