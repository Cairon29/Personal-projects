export const Square = ({handleBtn, style}) => {
  return (
    <section>
            <button onClick={handleBtn}>C O L O R E S</button>
            <div className={style}></div>
    </section>
  )
}