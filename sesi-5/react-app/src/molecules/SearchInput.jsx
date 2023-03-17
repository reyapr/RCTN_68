import React from 'react'
import MyButton from '../atoms/MyButton'
import MyInput from '../atoms/MyInput'

class SearchInput extends React.Component {
  constructor() {
    super() 
    this.state = {
      searchValue: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }
  
  searchMovie = () => {
    console.log(this.state.searchValue, `<=================== search movie ==================`);
  }
  
  render() {
    return (
      <div>
        <input 
          width={100} 
          placeholder={this.props.ph}
          value={this.props.value}
          onChange={this.props.onChange}
        >
          
      </input>
        <MyButton name="Search" onClick={this.searchMovie}/>
      </div>
    )
  } 
}

export default SearchInput