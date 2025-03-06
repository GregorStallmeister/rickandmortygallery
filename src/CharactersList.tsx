import {Character} from "./Character.tsx";
import {CharacterRendering} from "./CharacterRendering.tsx";

type Props = {
    characters: Character[]
}

export default function CharactersList(props: Props) {
    console.log(props)
    console.log(props.characters)

    return (
        <div>
            {
                props.characters.map(character => (
                    <CharacterRendering key={character.id.toString()}
                                        name={character.name}
                                        species={character.species}
                                        type={character.type}
                                        gender={character.gender}
                                        status={character.status}
                    />
                ))
            }
        </div>
    )
}