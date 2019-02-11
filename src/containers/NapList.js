import React from 'react'
import NapCard from '../components/NapCard'

class NapList extends React.Component {
  render() {
    return (
      <div>
        <h1>Choose your zone:</h1>
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
