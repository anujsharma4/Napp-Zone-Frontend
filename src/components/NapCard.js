import React from 'react'

const NapCard = (props) => {
  console.log(props.onSelectNap)
  return (

      <div className="ui card">
          <div className="image">
            <img src={props.napObj.picture} alt="logo" />
          </div>
      <div className="content">
        <div className="header">
          <h3>{props.napObj.name}</h3>
        </div>
        <div className="meta text-wrap">
          <h5>Location: {props.napObj.location}</h5>
          <button data-nap-id={props.napObj.id}>More Info</button>
          <p>Description: {props.napObj.description}</p>
        </div>
      </div>
    </div>

  )
}

export default NapCard
// <img src={`../images/${props.napObj.name}.jpg`} alt="logo" />
