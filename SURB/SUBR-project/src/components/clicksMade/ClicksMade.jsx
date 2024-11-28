import { useContext } from 'react'
import { globalClicks } from '../../context/ClicksContext'
import './ClicksMade.css'

export const ClicksMade = () => {
    const { clicks } = useContext(globalClicks)
  return (
    <div className="chart-container">
        <h2 className="chart-title">Acciones hechas en tu sesion</h2>
        <div className="square-chart">
            <p className="chart-number">{clicks}</p>
        </div>
    </div>
  )
}
