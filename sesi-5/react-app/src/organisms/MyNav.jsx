import React from 'react'
import Title from '../atoms/Title'
import SearchInput from '../molecules/SearchInput'

class MyNav extends React.Component {
  
  render() {
    return (
      <nav style={{
        border: '1px solid',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 20px'
      }}>
        <Title name="Belajar PemogRaMan"/>
        <SearchInput/>
      </nav>
    )
  }
  
}

export default MyNav