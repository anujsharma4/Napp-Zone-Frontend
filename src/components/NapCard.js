import React from 'react'
import {Link} from 'react-router-dom'

const NapCard = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.napObj.picture} />
      </div>
      <div className="content">
        <div className="header">
          {props.napObj.name}
        </div>
        <div className="description">
          <h5>Location: {props.napObj.location}</h5>
          <Link to={`/napsites/${props.napObj.id}`}>
            <button data-nap-id={props.napObj.id}>Details</button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default NapCard
// <img src={`../images/${props.napObj.name}.jpg`} alt="logo" />
