import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./slice";

const Users = () => {
  const selector = useSelector(state => ({...state.users}))
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  
  if(selector.isLoading) {
    return <div>...Loading</div>
  }
  
  return (
    <div>
      {
        selector.data.map(user => (
          <div>
            <p>
              name: {user.username}
            </p>
            <p>
              phone: {user.phone}
            </p> 
            <hr />
          </div>
        ))
      }
    </div>
  )
}

export default Users