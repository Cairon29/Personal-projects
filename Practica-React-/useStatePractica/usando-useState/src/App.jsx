import { Logs } from './assets/realTimeText'
import { Ocultar } from './assets/textoOculto'
import { ContadorTexto } from './assets/contadorTexto'
import { Contador } from './assets/contador'
import { Hover } from './assets/hover'
import { ToDo } from './assets/todoList'
import { TiempoEnPagina } from './assets/tiempoEnPagina'

/* REFACTORED COMPONENTS */
import { PianoPhrase } from './components'
import { ColorfulSquare } from './components'
import './App.css'

function App() {

  return (
    <div className='content'>
      <TiempoEnPagina/>
      <Logs/>
      <Ocultar/>
      <ContadorTexto/>  
      <Contador/>
      <Hover/>
      <ToDo/>
      <PianoPhrase/>
      <ColorfulSquare/>
    </div>
  )
}

export default App
