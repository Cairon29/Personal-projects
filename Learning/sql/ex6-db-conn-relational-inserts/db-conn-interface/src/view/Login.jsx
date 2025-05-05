import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserCard } from '../components/UserCard'

export const Login = () => {

  const [loggedUser, setLoggedUser] = useState('')
  const [user, setUser] = useState({
    email: '',
    password: ''
  })  
  const hdlEmail = (e) => {
      setUser((prev) => ({...prev, email: e.target.value}))   
  }
  const hdlpassword = (e) => {
      setUser((prev) => ({...prev, password: e.target.value}))   
  }

  const hdlSubmit = async (e) => {
    try {
        e.preventDefault()
        const request = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const data = await request.json()
        setLoggedUser(data[0])
        console.log(data);
    } catch (err) {
        console.log('there was an error pushing the data into the backend: ', err);
    } finally {
        setUser({
            email: '',
            password: ''
        })
    }
  }

  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={hdlSubmit}>
          <label htmlFor="email">Email</label>
          <input value={user.email} onChange={hdlEmail} type="email" name='email' placeholder='yourEmail@some.com'/>

          <br />
          <label htmlFor="password">Password</label>
          <input value={user.password} onChange={hdlpassword} type="password" name='password' placeholder='your_password1234'/>
          <br />
          <button type='submit'>Log in!</button>
      </form>
      {
        loggedUser && <UserCard user={loggedUser}/>
      }
      <Link to='/register-user'>Register</Link>
      <Link to='/'>Home</Link>
    </>
  )
}
