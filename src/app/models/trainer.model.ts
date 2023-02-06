// the model on how the data from trainer is structured
import { Pokemon } from "./pokemon.model";

export interface Trainer {
    id: number;
    trainername: string;
    favourites: Pokemon[];
}