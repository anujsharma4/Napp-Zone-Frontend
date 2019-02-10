import React from 'react'

const NapDetails = (props) => {
  return props.nap ?
  <div className="ui link cards">
    <div className="card">
      <div className="image">
        <img src={props.nap.picture} alt="logo" />
      </div>
      <div className="content">
        <div className="header">
          <h3>{props.nap.name}</h3>
        </div>
        <div className="meta text-wrap">
          <h3>Location: {props.nap.location}</h3>
          <h4>Description: {props.nap.description}</h4>
          <h4>Safety: {props.nap.safety}</h4>
        </div>
      </div>
    </div>
  </div>
    :
    null
}

export default NapDetails

// <div className="ui card">
//   <div>
//     <img src={props.nap.picture} alt={props.nap.name}/>
//     <h3>
//       {props.nap.name}
//     </h3>
//     <div className="description">{`Description: ${props.nap.description}`}</div>
//      <div className="description">{`Safety rating: ${props.nap.safety}`}</div>
//   </div>
// </div>
