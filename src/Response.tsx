import {Info} from "./Info.tsx";
import {Character} from "./Character.tsx";

export type Response = {
    info: Info,
    results: Character[]
}