import { Pokemon } from "./Pokemon";

export interface PokemonListProps {
  pokemons: Pokemon[];
  page: number;
  pageSize: number;
  totalPages: number;
}