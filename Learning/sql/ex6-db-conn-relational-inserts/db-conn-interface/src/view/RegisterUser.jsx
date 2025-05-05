import { useEffect, useState } from 'react'
import { Form } from '../components/Form'
import { Link } from 'react-router-dom'

export function RegisterUser() {

  return (
    <>
      <h1>Insert users in the data base</h1>
      <Form/>
      <Link to='/login'>Login</Link>
      <br />
      <Link to='/register-plushies'>Register new plushies</Link>
      <br />
      <Link to='/'>Home</Link>
    </>
  )
}
