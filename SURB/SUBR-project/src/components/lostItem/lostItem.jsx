export const LostItem = ({lostItem, handleFound}) => {
  return (
    <article className="lost-item">
        <p><b>Nombre:</b> {lostItem.Nombre_Objeto}</p>
        <p><b>Descripción:</b> {lostItem.Descripcion}</p>
        <p><b>Fecha de perdida</b> {lostItem.Fecha_Perdido}</p>
        <p><b>Encontrado en:</b> {lostItem.Lugar_Perdido}</p>
        <button onClick={handleFound}> Eliminar</button>
    </article>
  )
}
