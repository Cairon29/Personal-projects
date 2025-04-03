export const DisplayCounter = ({count, hdlText}) => {
  return (
    <section>
        <h2>Text Counter</h2>
        <input type="text" onChange={hdlText} />
        <p>Character count: {count}</p>
    </section>
  )
}
