import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }, [])
  
  return (
    <div>
      <h1>Users</h1>
      <Link to={'/'}>Back To Home</Link>
      {
        users.map(user => {
          return (
            <ul key={users.id}>
              <li role={`user-${user.id}`}><b>Name:</b> <span>{user.name}</span></li>
              <li><b>Email:</b> {user.email}</li>
            </ul>
          )
        })
      }
    </div>
  )
}

export default Users