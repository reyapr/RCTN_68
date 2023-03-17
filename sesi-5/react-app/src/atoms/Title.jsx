import React from 'react'
import PropTypes from 'prop-types'

class Title extends React.Component {
  render() {
    return <h2>{this.props.name.replace(/[A-Z]*/g, (v) => v.toLowerCase())}</h2>
  }
}

Title.propTypes = {
  name: PropTypes.string.isRequired
}

export default Title