import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authLoginApi } from "./slice";

const AuthLoginForm = () => {
  const selector = useSelector(state => state.auth)
  const dispatch = useDispatch()
  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  
  const passwordChange = (e) => {
    setPassword(e.target.value)
  }
  
  const submitLogin = (e) => {
    dispatch(authLoginApi({ email, password }))
    setEmail('')
    setPassword('')
  }
  
  return (
    <div>
      <h1>Login</h1>
      <div>
        email: <input type="text" onChange={emailChange} value={email}/>
      </div>
      <div>
        password: <input type="password" onChange={passwordChange} value={password}/>
      </div>
      <div>
        <button onClick={submitLogin}>submit</button>
      </div>
      <div>
        {selector.errorMessage && <p style={{color: 'red'}}>{selector.errorMessage}</p>}
        {selector.isLoading && <p>...on progress</p>}
        {selector.user.email && <p style={{ color: 'green'}}>Success to Login {selector.user.email}</p>}
      </div>
    </div>
  )
}

export default AuthLoginForm