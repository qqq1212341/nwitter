import { authService } from 'fbase'
import React, {useState} from 'react'

function Register() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [newAccount, setnewAccount] = useState(true)

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const logIn = authService.createUserWithEmailAndPassword(Email, Password)
    .catch((err) => {
      
    })
    .then(push)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Email" value={Email} onChange={emailHandler} required/>
        <input type="password" placeholder="Password" value={Password} onChange={passwordHandler} required/>
        <input type="submit" value={"Log In"}/>
      </form>
    </div>
  )
}

export default Register
