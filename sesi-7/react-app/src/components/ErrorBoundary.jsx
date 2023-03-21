import React from 'react'

class ErrorBoundary extends React.Component {
  constructor() {
    super()
    this.state = {
      isAppError: false
    }
  }
  
  componentDidCatch(err, info) {
   console.log(err, 'error'); 
   this.setState({
    isAppError: true
   })
  }
  
  render() {
    if(this.state.isAppError) {
      return <div>Something went wrong</div>
    }
    
    return this.props.children
  }
}

export default ErrorBoundary