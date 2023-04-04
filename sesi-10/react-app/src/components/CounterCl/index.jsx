import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './counterSlice'

class CounterCl extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.count}</h2>
        <button onClick={() => this.props.incrementAct()}>+</button>
        <button onClick={() => this.props.decrementAct()}>-</button>
      </div>
    )
  }
}

// dispatch = store.dispatch 

const mapDispatchToProps = (dispatch) => {
  /**
   * 
   * increment() = {type: 'increment'}
   * dispatch({type: 'increment'})
   */
  return {
    incrementAct: () => dispatch(increment()),
    decrementAct: () => dispatch(decrement())
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.counterCl.title,
    count: state.counterCl.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterCl)