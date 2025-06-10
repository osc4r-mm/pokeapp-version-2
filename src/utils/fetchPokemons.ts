import { Pokemon } from "../types/Pokemon";
import { PokemonDetailData } from "../types/PokemonDetail";

export interface FetchPokemonsResult {
  results: Pokemon[];
  count: number;
}

export async function fetchPokemons(page: number, pageSize: number): Promise<FetchPokemonsResult> {
  const offset = (page - 1) * pageSize;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
  );
  const data = await res.json();
  return { results: data.results, count: data.count };
}


export async function fetchPokemonDetail(name: string): Promise<PokemonDetailData> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error("No se pudo cargar el Pokémon");
  return await res.json();
}