import React from 'react'

class MyButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}> {this.props.name} </button>
    )
  }
}

export default MyButton