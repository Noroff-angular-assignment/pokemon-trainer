// Trainer interface model structure
import { Pokemon } from "./pokemon.model";

export interface Trainer {
    id: number;
    trainername: string;
    favourites: Pokemon[];
}