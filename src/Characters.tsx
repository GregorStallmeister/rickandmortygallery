import {Character} from "./Character.tsx";
import CharactersList from "./CharactersList.tsx";
import {useState} from "react";

type Props = {
    characters: Character[],
    setCharacters: (characters: Character[]) => void
    loadCharacters: () => void
}

export default function Characters(props: Props) {
    const [input, setInput] = useState<string>("")

    return (
        <>
            <h1>Rick & Morty Characters:</h1>
            <br/>&nbsp;<br/>
            <input value={input} onChange={event => {
                setInput(event.target.value)
            }}/>
            <button onClick={() => {
                console.log("Button Filter clicked")
                const charactersFiltered: Character[] = props.characters.filter((character) => {
                    return character.name.indexOf(input) >= 0
                })
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                charactersFiltered.length > 0 ? props.setCharacters(charactersFiltered) : setInput("Name not known!")
            }}>Filter
            </button>
            <button onClick={() => {
                console.log("Button Reset clicked")
                props.loadCharacters()
            }}>Reset</button>
            <CharactersList characters={props.characters}/>
        </>
    )
}