import React from 'react'
import NapCard from '../components/NapCard'

class NapList extends React.Component {
  render() {
    return (
      <div>
        <h1>Choose your zone:</h1>
        {this.props.napsArray.map((napObj) =>
          <NapCard
            key={napObj.id}
            napObj={napObj}
            onSelectNap={this.props.onSelectNap}
          />)
        }
      </div>
    )
  }
}

export default NapList
