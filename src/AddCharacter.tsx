import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./Character.tsx";

export default function AddCharacter() {

    const [newCharacter, setNewCharacter] = useState<Character>({id: undefined, name: "", status: "", gender: "", type: "", species: ""})

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("onSubmit was called")
    }

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name={"id"} required={true} value={newCharacter.id} placeholder={"ID"} onChange={onChange}/>
                <br/>
                <input name={"name"} required={true} value={newCharacter.name} placeholder={"name"} onChange={onChange}/>
                <br/>
                <input name={"species"} value={newCharacter.species} placeholder={"species"} onChange={onChange}/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}