import {useEffect, useState} from "react";
// import {responseStringHardCoded} from "./responseStringHardCoded.tsx";
import {Character} from "./Character.tsx";
// import {Response} from "./Response.tsx";
import Characters from "./Characters.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import Header from "./Header.tsx";
import AddCharacter from "./AddCharacter.tsx";
import axios from "axios";
import {Info} from "./Info.tsx";

function App() {
    // console.log(responseString)
    // const response: Response = JSON.parse(responseString)
    // console.log(JSON.stringify(response))
    // const results: Character[] = response.results
    // console.log(results)
    // console.log(JSON.stringify(results))
    // const character1: Character = results[0]
    // console.log(character1)
    // console.log(JSON.stringify(character1))
    // console.log(character1.id)
    // console.log(character1.name)
    // console.log(character1.gender)

    // const info: Info = response.info
    // console.log(info)
    // console.log(JSON.stringify(info))
    // const count: number = info.count
    // console.log(count)


    const [characters, setCharacters] = useState<Character[]>()
    const [info, setInfo] = useState<Info>()

    // setCharacters(results) // causes too much re-renders

    function loadCharacters() {
        // const responseString: string = responseStringHardCoded
        // let responseString: string = ""
        //
        // axios.get("https://rickandmortyapi.com/api/character")
        //     .then((response) => {
        //         console.log(response)
        //         responseString = JSON.stringify(response.data)
        //         console.log(responseString)
        //     })
        //
        // const response: Response = JSON.parse(responseString)
        // const results: Character[] = response.results
        // setCharacters(results)

        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                console.log(response)
                const charactersToBeSet: Character[] = response.data.results
                setCharacters(charactersToBeSet)
                console.log("charactersToBeSet:")
                console.log(charactersToBeSet)
                console.log("characters:")
                console.log(characters)

                const infoToBeSet: Info = response.data.info
                setInfo(infoToBeSet)
                console.log("infoToBeSet:")
                console.log(infoToBeSet)
                console.log("info:")
                console.log(info)
            })
            .catch((errorResponse) => {
                console.log(errorResponse)
                alert("Error occurred while fetching characters!")
            })
    }

    function addCharacter(newCharacter: Character) {
        setCharacters([...characters, newCharacter])
    }

    useEffect(() => {
        console.log("Mounting App!")
        loadCharacters()
    }, [])

    return (
        <><Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/characters"
                       element={<Characters characters={characters}
                                            setCharacters={setCharacters}
                                            loadCharacters={loadCharacters}/>}/>
                <Route path="/characters/add" element={<AddCharacter addCharacter={addCharacter}/>}/>
            </Routes></>
    )
}

export default App
