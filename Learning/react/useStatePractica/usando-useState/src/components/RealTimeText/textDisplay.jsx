export const TextDisplay = ({hdlText, text}) => {
  return (
    <section>
        <h2>Visualizador de texto</h2>
        <input placeholder="Palabra aqui" type="text" onChange={hdlText} value={text} />
        <h4>{text}</h4>
    </section>
  )
}
