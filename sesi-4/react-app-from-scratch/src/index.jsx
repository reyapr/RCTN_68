import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const App = () => {
  return (
    <h1 className='my-text'>Hello Bro</h1>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

root.render(<App/>)
