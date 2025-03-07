import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <Link to="/home">Home</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/characters">Charcaters</Link>
        </div>
    )
}