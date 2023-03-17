import React from 'react'
import MyNav from '../organisms/MyNav'

class PageTemplate extends React.Component {
  render() {
    return (
      <>
        <MyNav/>
        {this.props.children}
      </>
    )
  }
}

export default PageTemplate