import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      {/* <a href="/">Home</a> | {' '}
      <a href="/about">About</a> */}
      <Link to='/'>Home</Link> | {' '}
      <Link to='/about'>About Us</Link>
    </nav>
  )  
}

export default Navbar