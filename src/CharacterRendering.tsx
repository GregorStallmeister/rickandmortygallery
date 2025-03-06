type Props = {
    key: string,
    name: string,
    species: string,
    type: string,
    gender: string,
    status: string
}

export function CharacterRendering(props: Props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <ul>
                <li>
                    Species: {props.species}
                </li>
                <li>
                    Type: {props.type}
                </li>
                <li>
                    Gender: {props.gender}
                </li>
                <li>
                    Status: {props.status}
                </li>
            </ul>
        </div>
    )
}