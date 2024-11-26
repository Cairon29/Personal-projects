import { useState } from 'react'
import './App.css'
import { YoutuberProvider } from './context/youtuber-context'
import { GentlemanPrograming } from './components' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Use context</h1>
      <p>Practicing useContext with the public API: </p>

      <YoutuberProvider>
        <GentlemanPrograming/>
      </YoutuberProvider>
    </>
  )
}

export default App
