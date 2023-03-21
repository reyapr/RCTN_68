import { useEffect, useState } from "react"

const UsersFn = () => {
  const [state, setState] = useState({
    users: [],
    user: {},
    userId: null,
    isUserLoading: false
  })
   
  const updateUserId = (userId) => {
    setState({
      ...state,
      userId,
      isUserLoading: true,
      user: {}
    })
  }
  
  const initFetchUsers = () => {
    if(localStorage.getItem('usersFn')) {
      setState({
        ...state,
        users: JSON.parse(localStorage.getItem('usersFn'))
      })
    } else {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        setState({
          ...state,
          users: res
        })
        localStorage.setItem('usersFn', JSON.stringify(res))
      })
      .catch(err => {
        console.log(err, `<=================== err ==================`);
      })
    }
  }
  
  const getUserDetails = () => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${state.userId}`)
      .then(res => res.json())
      .then(res => {
        setState({
          ...state,
          user: res[0],
          isUserLoading: false,
        })
      })
      .catch(err => {
        console.log(err, `<=================== err ==================`);
      })
  }
  
  // component did mount also component did update
  useEffect(() => {
    if(state.userId) {
      getUserDetails()
    } else {
      initFetchUsers()
    }
    
   
  }, [state.userId])
  
  useEffect(() => {
     // will unmount
     return () => {
      console.log( `<=================== test ==================`);
      localStorage.removeItem('usersFn')
    }
  }, [])
  
  return (
    <div>
      <div>
        <h2>User Details</h2>
        {state.isUserLoading && <div>...Loading</div>}
        {
          state.user.email &&
          <>
            <div>
              Email: {state.user.email}
            </div>
            <div>
              Phone: {state.user.phone}
            </div>
            <div>
              Street: {state.user.address.street}
            </div>
          </>
        }
      </div>
      <hr />
      {state.users.length === 0 ? 
        <div>...Loading</div> 
        : 
        state.users.map(user => {
          return (
            <div key={user.id}>
              <div>
                Name: {user.name} {' '}
                <button onClick={() => updateUserId(user.id)}>Get Details</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default UsersFn