import './estilosTarjeta.css'
import { Tarjeta } from "./assets/tarjeta";

export function App () {
    return(
        <>
            <Tarjeta 
                url='https://assets-prd.ignimgs.com/2021/08/13/evangelion-3-0-1-0-thrice-upon-a-time-1628882670965.jpg' 
                titulo='Evangelion 3.0 + 1.0' 
                autor='Hideaki Anno'
                imbd={'9.9'}
                rt='9.7'
                personal={'10'}/>
            <Tarjeta
                url={'https://c4.wallpaperflare.com/wallpaper/980/390/447/sousou-no-frieren-anime-stark-sousou-no-frieren-fern-sousou-no-frieren-hd-wallpaper-preview.jpg'}
                titulo={'Sousou No Frieren'}
                autor={'Kanehito Yamada'}
                imbd={'9.7'}
                rt={'9.6'}
                personal={'9.7'}/>
            <Tarjeta
                url={'https://ramenparados.com/wp-content/uploads/2023/11/bocchi-the-rock-manga-destacado.jpg'}
                titulo={'Bocchi The Rock!'}
                autor={'Aki Hamaji'}
                imbd={'9.2'}
                rt={'8.8'}
                personal={"9.5"}/>
            <Tarjeta
                url={'https://m.media-amazon.com/images/S/pv-target-images/6ef970938930c37de818cdc445006c971fc0b145cbf63048f9ed0ae1f49f8ac8.jpg'}
                titulo={'Samurai Shamploo'}
                autor={'Shinichiro Watanabe'}
                imbd={'9.2'}
                rt={'8.7'}
                personal={'9.5'}/>
            <Tarjeta
                url={'https://i.pinimg.com/736x/6b/96/eb/6b96ebc5a42c810c73152728f05d2cb5.jpg'}
                titulo={'Monogatari Series'}
                autor={'Nishio Ishin'}
                imbd={'9.2'}
                rt={'8.7'}
                personal={'9.5'}/>
            <Tarjeta
                url={'https://animerelleno.com/storage/animes/background/devilman-crybaby.jpg'}
                titulo={'Devilman Crybaby'}
                autor={'Go Nagai'}
                imbd={'9.2'}
                rt={'8.7'}
                personal={'9.5'}/>
            <Tarjeta
                url={'https://www.pixel4k.com/wp-content/uploads/2023/09/satoru-gojo-jujutsu-kaisen-4k_1695936977.jpg'}
                titulo={'Jujutsu Kaisen'}
                autor={'Gege Akutami'}
                imbd={'9.1'}
                rt={'9.8'}
                personal={'9.0'}/>
        </>
    )
} 