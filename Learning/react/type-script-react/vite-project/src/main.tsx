import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

let jose = 18;
let david = {
  age: 20,
  name: 'David',
  hobbies: ['programming', 'gaming', 'reading'],
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App working={false} person={jose} person2={david}/>
  </StrictMode>,
)
