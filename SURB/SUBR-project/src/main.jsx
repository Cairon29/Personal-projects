import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ClicksContext } from './context/ClicksContext.jsx'
import  './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClicksContext>
      <App />
    </ClicksContext>
  </StrictMode>,
)


