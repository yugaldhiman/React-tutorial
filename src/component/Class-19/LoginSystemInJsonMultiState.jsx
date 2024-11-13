import axios from 'axios';
import React, { useState } from 'react'
import { BiCaretRight } from "react-icons/bi";

const LoginSystemInJsonMultiState = (props) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleLogin = async (Event) => {





    Event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/student`, {
        params: {
          userEmail: email,
          userPassword: password,
        },
      });

      const user = response.data.find(
        (user) => user.userEmail === email && user.userPassword === password);

      if (user) {
        setMessage('Login Page');
      }
      else {
        setMessage('Not Login page')
      }
    }
    catch (error) {
      setMessage('Error in login ');
    }
  }

  return (
    <>
      <div>
        <h2>Login {props.data}</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>UserEmail {<BiCaretRight />} </label>
            <input type="text"
              value={email}
              onChange={(Event) => setEmail(Event.target.value)} />
          </div>
          <div>
            <label>UserPassword {<BiCaretRight />} </label>
            <input type="text"
              value={password}
              onChange={(Event) => setPassword(Event.target.value)} />
          </div>
          <button type='Submit'>Login</button>
        </form>
        {
          message && <h1>{message}</h1>
        }
      </div>
    </>
  )
}

export default LoginSystemInJsonMultiState
