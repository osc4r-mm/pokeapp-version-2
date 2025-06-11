import React from "react";
import { PokemonListProps } from "../types/PokemonList";
import PokemonCard from "./PokemonCard";

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  page,
  pageSize,
}) => (
  <ul className="pokemon-list">
    {pokemons.map((pokemon) => (
      <li key={pokemon.name}>
        <PokemonCard
          name={pokemon.name}
          url={pokemon.url}
          page={page}
          pageSize={pageSize}
          view="list"
          imgSize={50}
        />
      </li>
    ))}
  </ul>
);

export default PokemonList;