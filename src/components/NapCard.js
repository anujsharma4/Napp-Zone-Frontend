import React from 'react'
import {Link} from 'react-router-dom'

const NapCard = (props) => {
  return (
  <div className="ui link cards">
    <div className="card">
      <div className="image">
        <img src={props.napObj.picture} alt="logo" />
      </div>
      <div className="content">
        <div className="header">
          <h3>{props.napObj.name}</h3>
        </div>
        <div className="meta text-wrap">
          <h5>Location: {props.napObj.location}</h5>
          <Link to={`/napsites/${props.napObj.id}`}>
            <button data-nap-id={props.napObj.id}>Details</button>
          </Link>
        </div>
      </div>
    </div>
  </div>

  )
}

export default NapCard
// <img src={`../images/${props.napObj.name}.jpg`} alt="logo" />
