import React from 'react'

const MyNapList = () => {
  console.log(this.props)
  return (
    <div className="ui segment inverted olive my-naps">
        <div className="ui five column grid">
          <div className="row nap-list-row">
            <p>hey</p>
          </div>
        </div>
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
