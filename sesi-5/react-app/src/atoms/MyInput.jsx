import React from 'react';

class MyInput extends React.Component {
  render() {
    return (
      <input 
        width={100} 
        placeholder={this.props.ph}
        value={this.props.value}
        onChange={this.props.onChange}
      >
        
          
      </input>
    )
  }
}

export default MyInput