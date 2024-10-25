import '../estilosTarjeta.css'

export function Tarjeta ({autor, titulo, imbd, rt, personal, url}) {
  
    return (
        <article className="tarjeta-animes">
            <img className="contenedor-imagenes" src={url}/>
            <section className='informacion'>
                    <h3 className="autor">{autor}</h3>
                    <strong className="titulo">{titulo}</strong>
            </section>
            <section className="rating">
                <div className="puntuacion">
                    <h2 className='subtitle'>IMDB</h2>
                    {imbd}
                </div>
                <div className="puntuacion">
                    <h2 className='subtitle'>Rotten Tomatoes</h2>
                    {rt}
                </div>
                <div className="puntuacion">
                    <h2 className='subtitle'>Personal</h2>
                    {personal}
                </div>
            </section>
        </article>
    )
}
