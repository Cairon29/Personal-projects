import './componente.css'

export function App (autor, titulo, imbd, rt, personal, url) {
    const samuraiShamploo = {
        backgroundImage: 'url(https://m.media-amazon.com/images/S/pv-target-images/6ef970938930c37de818cdc445006c971fc0b145cbf63048f9ed0ae1f49f8ac8.jpg)' 
      }
    
      const evangelion = {
        backgroundImage: 'url(https://assets-prd.ignimgs.com/2021/08/13/evangelion-3-0-1-0-thrice-upon-a-time-1628882670965.jpg)'
      }
    
      const monogatariSeries = {
        backgroundImage: 'url(https://i.pinimg.com/736x/6b/96/eb/6b96ebc5a42c810c73152728f05d2cb5.jpg)'
      }
    
      const devilmanCryBaby = {
        backgroundImage: 'url(https://animerelleno.com/storage/animes/background/devilman-crybaby.jpg)'
      }
      const bocchiTheRock = {
        backgroundImage: 'url(https://images8.alphacoders.com/129/1290007.jpg)'
      }
      const jujutsuKaisen = {
        backgroundImage: 'url(https://areajugones.sport.es/wp-content/uploads/2022/03/jujutsu-kaisen-sleep-1560x880.jpg)'
      }
    
    
    
    return (
        <article className="tarjeta-animes">
            <img className="contenedor-imagenes" src={url}/>
            <section className='informacion'>
                    <h3 className="autor">{autor}</h3>
                    <strong className="titulo">{titulo}</strong>
            </section>
            <section className="rating">
                <div className="puntuacion">
                    <h2>IMDB</h2>
                    {imbd}
                </div>
                <div className="puntuacion">
                    <h2>Rotten Tomatoes</h2>
                    {rt}
                </div>
                <div className="puntuacion">
                    <h2>Personal</h2>
                    {personal}
                </div>
            </section>
        </article>
    )
}
