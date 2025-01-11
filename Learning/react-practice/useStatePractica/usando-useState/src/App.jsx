/* REFACTORED COMPONENTS */
import { PianoPhrase, ColorfulSquare, TimeActive, Todo, TextCounter, Factorial, HiddenText, RealTimeText} from './components'
import './App.css'

function App() {

  return (
    <div className='content'>
      <h1>Refactored Components</h1>
      <TimeActive/>
      <PianoPhrase/>
      <ColorfulSquare/>
      <Todo/>
      <TextCounter/>
      <Factorial/>
      <HiddenText/>
      <RealTimeText/>
    </div>
  )
}

export default App
