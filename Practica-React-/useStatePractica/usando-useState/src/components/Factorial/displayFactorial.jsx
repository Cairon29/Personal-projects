export const DisplayFactorial = ({total, hdlAdd, hdlRest, hdlFacto}) => {
  return (
    <section>
        <h2>
            Numero es: {total}
        </h2>
        <h4>Factorial del numero es: {hdlFacto()}</h4> 
        {/* FIX EXECTURION OF FACTORIAL FUNCTION */}
        <button onClick={hdlAdd}> + 2</button>
        <button onClick={hdlRest}> Reiniciar </button>
    </section>
  )
}
