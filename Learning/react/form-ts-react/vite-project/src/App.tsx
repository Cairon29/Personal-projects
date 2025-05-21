import { useState } from 'react'
import { Form } from './components/Form'

import { type HdlValues, type HdlFunctions } from './types/Form'

import './App.css'

function App() {
  const [values, setValues] = useState<HdlValues>({
    text: '',
    number: 0
  })

  const hdlFunctions: HdlFunctions = {
    hdlText (e: React.ChangeEvent<HTMLInputElement>) {
      setValues((prev) => ({ ...prev, text: e.target.value }))
    },
    hdlNumber (e: React.ChangeEvent<HTMLInputElement>) {
      setValues((prev) => ({ ...prev, number: Number(e.target.value)}))
    },
    hdlSubmit (e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      console.log(values)
      setValues({
        text: '',
        number: 0
      })
    }
  }

  return (
    <>
      <h1>Amazing form</h1>
      <Form
        hdlValues={values}
        hdlFunctions={hdlFunctions}
      >
        <h2>Form</h2>
      </Form>
    </>
  )
}

export default App
