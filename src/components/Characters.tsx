export default function Characters(props: any) {
    const {characters, setCharacters} = props;

    const resetCharacters = () => {
        setCharacters(null);

    }

    return (
        <div className="characters">
            <h1>Personajes Rick & Morty</h1>
            <span className="back-home" onClick={resetCharacters}>Volver al sitio Principal</span>
            <div className="container-characters">
                {characters.map((character: any, index: any) => (
                    <div className="character-container" key={index}>
                        <div><img src={character.image} alt="{character.name}"/></div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>{character.status === 'Alive' ? (<>
                                <span className="alive"></span>VIVO
                            </>) : (<>
                                <span className="dead"></span>MUERTO</>)}
                            </h6>
                            <p>
                                <span>Episodios: </span>
                                <span>{character.episode.length}</span>

                            </p>

                        </div>
                        <p>{character.species}</p>

                        <p>{character.gender}</p>
                        <p>{character.type}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}