import {useState} from "react";
import {responseString} from "./responseString.tsx";
import {Character} from "./Character.tsx";
import {Response} from "./Response.tsx";
import {Info} from "./Info.tsx";
import CharactersList from "./CharactersList.tsx";

function App() {
    console.log(responseString)
    const response: Response = JSON.parse(responseString)
    console.log(JSON.stringify(response))
    const results: Character[] = response.results
    console.log(results)
    console.log(JSON.stringify(results))
    const character1: Character = results[0]
    console.log(character1)
    console.log(JSON.stringify(character1))
    console.log(character1.id)
    console.log(character1.name)
    console.log(character1.gender)

    const info: Info = response.info
    console.log(info)
    console.log(JSON.stringify(info))
    const count: number = info.count
    console.log(count)


    const [characters, setCharacters] = useState<Character[]>(results)
    // setCharacters(results) // causes too much re-renders

    return (
        <>
            <h1>Rick & Morty Characters:</h1>
            <br/>&nbsp;<br/>
            <CharactersList characters = {characters} />
        </>
    )
}

export default App
