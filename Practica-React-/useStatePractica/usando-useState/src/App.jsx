import { BotonColor } from './assets/btnColor'
import { Logs } from './assets/realTimeText'
import { Ocultar } from './assets/textoOculto'
import { ContadorTexto } from './assets/contadorTexto'
import { Contador } from './assets/contador'
import { Hover } from './assets/hover'
import { ToDo } from './assets/todoList'
import { TiempoEnPagina } from './assets/tiempoEnPagina'
import AleatoryPhrase from './assets/aleatoryPhrase'

import './App.css'

function App() {

  return (
    <div className='content'>
      <TiempoEnPagina/>
      <BotonColor/>
      <Logs/>
      <Ocultar/>
      <ContadorTexto/>  
      <Contador/>
      <Hover/>
      <ToDo/>
      <AleatoryPhrase/>
    </div>
  )
}

export default App
