import {useState} from 'react'
import Characters from "./components/Characters";
import imagen from './img/rick-morty.png'
import './App.css'

function App() {
    const [characters, setCharacters] = useState(null)
    const reqApi = async () => {
        const api = await fetch('https://rickandmortyapi.com/api/character/')
        const caracterApi = await api.json()
        console.log(caracterApi)
        setCharacters(caracterApi.results)
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="title">Rick & Morty</h1>
                {characters ? (<Characters characters={characters} setCharacters={setCharacters}/>) : (<><img src={imagen} alt=""
                                                                                className="img-home"/>
                    <button onClick={reqApi} className="btn btn-search">Buscar Personajes</button>
                </>)}

            </header>
        </div>
    )
}

export default App
