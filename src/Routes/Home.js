import { authService } from 'fbase'
import React from 'react'

function Home(props) {
  const myPageHandler = (e) => {
    e.preventDefault()
    props.history.push('/mypage')
  }
  console.log(authService.currentUser)
  return (
    <div>
      <a href="/login">Login</a>
      <br/>
      <button onClick={myPageHandler}>mypage</button>
    </div>
  )
}

export default Home
