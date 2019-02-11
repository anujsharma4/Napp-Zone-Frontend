import React from 'react'
import NapCard from '../components/NapCard'
import { Message, Header } from 'semantic-ui-react'
// {(!props.myNaps[0].empty ? )}
const MyNapList = (props) => {
  console.log(props.clickNap)
  return (
    <div>
      <Header as='h1' icon="bed" className="inverted" content='My Naps:' />
        <video className="background-video" loop muted autoPlay playsInline poster= "https://media.giphy.com/media/U3qYN8S0j3bpK/source.gif">
          <source src="https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.mp4" type="video/mp4"/>
        </video>
        <div className="ui link cards">
        {props.myNaps.map((napObj) =>
          <NapCard
            key={napObj.id}
            napObj={napObj}
            onSelectNap={props.onSelectNap}
            setSelectedNap={props.setSelectedNap}
            clickNap={props.clickNap}
          />)
        }
      </div>
    </div>
  )
}

export default MyNapList

//message when new nap added
  // {(props.myNaps[0]) ? <Message compact>{props.myNaps[0].name} location added!</Message> : null}

// {this.props.myBots.length < 1 ? null :
//   this.props.myBots.map(bot =>
//     <NapCard
//       key={bot.id}
//       bot={bot}
//       setSelectedBot={this.props.setSelectedBot}
//       location={"mine"}
//     />
//   )
// }
