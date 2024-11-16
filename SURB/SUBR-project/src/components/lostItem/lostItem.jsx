export const LostItem = ({lostItem, handleFound}) => {
  return (
    <article className="lost-item">
        <p><b>Nombre del objeto:</b> {lostItem.object}</p>
        <p><b>Descripción:</b> {lostItem.description}</p>
        <p><b>Fecha de perdida</b> {lostItem.dateLost}</p>
        <p><b>Encontrado en:</b> {lostItem.foundIn}</p>
        <p><b>Encontrado por:</b> {lostItem.foundBy}</p>
        <button onClick={handleFound}> Eliminar</button>
    </article>
  )
}
