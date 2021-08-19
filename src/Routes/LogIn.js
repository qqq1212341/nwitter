import { authService } from 'fbase'
import React, {useState} from 'react'

function LogIn(props) {
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
    const logIn = authService.signInWithEmailAndPassword(Email, Password)
    .then(props.history.push('/'))
    .catch((err) => {
      console.log(err)
      if(err.code === "auth/invalid-email"){
        alert('올바른 이메일을 입력하세요.')
      } else if (err.code === "auth/user-not-found"){
        alert('유저 정보가 없습니다.')
      } else if (err.code === "auth/wrong-password"){
        alert('잘못된 비밀번호 입니다.')
      } else {
        alert('잘못된 접근입니다.')
      }
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Email" value={Email} onChange={emailHandler} required/>
        <input type="password" placeholder="Password" value={Password} onChange={passwordHandler} required/>
        <input type="submit" value={"Log In"}/>
      </form>
    <div>
      <button>Continue with Google</button>
      <button>Continue with Github</button>
    </div>
    <div>
      계정이 없나요? <a href="/register">가입하기</a>
    </div>
    </div>
  )
}

export default LogIn
