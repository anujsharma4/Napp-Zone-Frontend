import React from 'react'
import NapCard from '../components/NapCard'

const MyNapList = (props) => {
  console.log(props.myNaps)
  return (
    <div>
    <h1>My naps:</h1>
    {props.myNaps.map((napObj) =>
      <NapCard
        key={napObj.id}
        napObj={napObj}
        onSelectNap={props.onSelectNap}
        setSelectedNap={props.setSelectedNap}
      />)
    }
    </div>
  )
}

export default MyNapList


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
