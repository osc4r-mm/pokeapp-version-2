import { Pokemon } from "./Pokemon";

export interface PokemonGridProps {
  pokemons: Pokemon[];
  page: number;
  pageSize: number;
  totalPages: number;
}