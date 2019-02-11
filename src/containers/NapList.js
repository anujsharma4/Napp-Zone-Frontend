import React from 'react'
import NapCard from '../components/NapCard'
import { Header } from 'semantic-ui-react'

class NapList extends React.Component {
  render() {
    return (
    <div>
      <Header as='h1' icon="bed" className="inverted" content='Choose Your Zone:' />
        <video className="background-video" loop muted autoPlay playsInline poster= "https://media.giphy.com/media/l3q2RgN7WUjeUUXm0/source.gif">
          <source src="https://media.giphy.com/media/l3q2RgN7WUjeUUXm0/giphy.mp4" type="video/mp4"/>
        </video>
        <div className="ui link cards">
          {this.props.napsArray.map((napObj) =>
            <NapCard
              key={napObj.id}
              napObj={napObj}
              onSelectNap={this.props.onSelectNap}
              setSelectedNap={this.props.setSelectedNap}
            />)
          }
        </div>
    </div>
    )
  }
}

export default NapList
