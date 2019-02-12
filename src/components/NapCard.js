import React from 'react'
import {Link} from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const NapCard = (props) => {
  return (
    <div className="orange card">
      <div className="image">
        <img alt="napspace" src={props.napObj.picture} />
      </div>
      <div className="content">
        <div className="ui orange header">
          {props.napObj.name}
        </div>
        <div className="description">
          <Header as='h5' className="orange">Location: {props.napObj.name}</Header>
          <div className="ui divider"></div>
          <Link to={`/napsites/${props.napObj.id}`}>
            <button data-nap-id={props.napObj.id}>Details</button>
          </Link>
          {!!props.clickNap ?
            <Link to={`/mynaps`}>
              <button onClick={() => props.clickNap(props.napObj)}>Remove</button>
            </Link>
            :
            null
          }
        </div>
      </div>
    </div>
  )
}

export default NapCard

// onClick={() => props.clickNap(props.napObj)}
// <img src={`../images/${props.napObj.name}.jpg`} alt="logo" />
