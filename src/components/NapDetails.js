import React from 'react'

const NapDetails = (props) => {
  console.log(props.nap)
  return props.nap ?
    <div className="ui card">
      <div>
        <img src={props.nap.picture} alt={props.nap.name}/>
        <h3>
          {props.nap.name}
        </h3>
        <div>{`Description: ${props.nap.description}`}</div>
        <div>{`Safety rating: ${props.nap.safety}`}</div>
      </div>
    </div>
    :
    null
}

export default NapDetails
