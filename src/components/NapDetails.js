import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import StarRatingComponent from 'react-star-rating-component';

const NapDetails = (props) => {
  return props.nap ?
  <div>
    <Header as='h1' icon="bed" className="inverted" content='Details' />
    <video className="background-video" loop muted autoPlay playsInline poster= "https://media.giphy.com/media/26n6G8lRMOrYC6rFS/source.gif">
      <source src="https://media.giphy.com/media/26n6G8lRMOrYC6rFS/giphy.mp4" type="video/mp4"/>
    </video>
    <div className="ui link cards">
      <div className="blue card">
        <div className="image">
          <img src={props.nap.picture} alt="logo" />
        </div>
        <div className="content">
          <div className="header">
            <Header as='h3' className="orange">{props.nap.name}</Header>
          </div>
          <div className="description">
            <Header as='h4' className="orange">Location: {props.nap.location}</Header>
            <div className="ui divider"></div>
            <Header as='h4' className="orange">Description: {props.nap.description}</Header>
            <Header as='h4' className="orange">Safety: {props.nap.safety}</Header>
            <div className="ui divider"></div>
            <div>
               <Header as='h4' className="blue">Rate this location:</Header>
               <StarRatingComponent
                 name="rate1"
                 starCount={5}
                 value={props.rating}
                 onStarClick={props.onStarClick.bind(props)}
               />
             </div>
            <Link to={'/mynaps'}>
              <Button animated='vertical'>
                <Button.Content hidden onClick={() => props.setSelectedNap(props.nap)}>Nap</Button.Content>
                <Button.Content visible>
                  <Icon name='cloud' />
                </Button.Content>
              </Button>
            </Link>
            <Link to={`/napsites`}>
              <Button animated>
                <Button.Content visible>Back</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow left' />
                </Button.Content>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
      :
      <Header as='h1'>First Header</Header>
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
