import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { img } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {img && <img src={img} alt="Imagen de gato que corresponde a las tres primeras palabras del hecho"/>}
        </main>
    )
}
