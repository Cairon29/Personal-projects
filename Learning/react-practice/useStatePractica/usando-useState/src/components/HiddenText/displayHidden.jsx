export const DisplayHidden = ({show, text}) => {
  return (
    <section>
        <button onClick={show}> H I D E __&__ S H O W</button>
        <h1>{text}</h1>
    </section>
  )
}
