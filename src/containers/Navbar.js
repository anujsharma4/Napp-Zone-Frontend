import React from 'react'
import logo from '../images/SleepingGuy.png';

const Navbar = (props) => {
  return(
    <div className={`ui inverted ${props.color} menu`}>
        <a className="item" href={props.link} >
        <img src={logo} width="160" alt="logo" />
          <h2 className="ui header">
            <div className="content">{props.header}</div>
            <div className="sub header">{props.tagline}</div>
          </h2>
        </a>
    </div>
  )
}

export default Navbar


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
