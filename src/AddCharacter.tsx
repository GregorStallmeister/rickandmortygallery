import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./Character.tsx";
import {useNavigate} from "react-router-dom";

type Props = {
    addCharacter: (newCharacter: Character) => void
}

export default function AddCharacter(props: Props) {

    const [newCharacter, setNewCharacter] = useState<Character>({id: undefined, name: "", status: "", gender: "", type: "", species: ""})
    const navigate = useNavigate()

    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log("onSubmit was called")

        props.addCharacter(newCharacter)
        navigate("/characters")
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
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    )
}