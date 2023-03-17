import React from 'react'
import Counter from '../molecules/Counter'
import PageTemplate from '../templates/PageTemplate'

class HomePage extends React.Component {
  render(){
    return (
      <PageTemplate>
        <div className="App">
          <Counter/>
        </div>
      </PageTemplate>
    )
  }  
}

export default HomePage