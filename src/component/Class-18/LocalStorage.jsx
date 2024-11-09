import React, { useRef } from 'react'
import Home from './Home'

const LocalStorage = () => {
  const email = useRef()
  const password = useRef()
  const getEmail = localStorage.getItem('emailData')
  const getPassword = localStorage.getItem('passwordData')
  const handlarSubmit = () => {
    if (email.current.value === "yugaldhiman@gmail.com" && password.current.value === "1234") {
      localStorage.setItem("emailData", "yugaldhiman@gmail.com")
      localStorage.setItem("passwordData", "1234")
    }
  }
  return (
    <>{
      getEmail && getPassword ? 
        <Home /> :

        <form onSubmit={handlarSubmit}>
          <p>
            <input ref={email} type="email" placeholder='Enter the Email' />
          </p>
          <p>
            <input ref={password} type="password" placeholder='Enter the Password' />
          </p>
          <button>Login</button>
        </form>
    }
    </>
  )
}

export default LocalStorage
