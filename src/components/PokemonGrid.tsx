import React from "react";
import { PokemonGridProps } from "../types/PokemonGrid";
import PokemonCard from "./PokemonCard";

const PokemonGrid: React.FC<PokemonGridProps> = ({
  pokemons,
  page,
  pageSize,
}) => (
  <div className="pokemon-grid">
    {pokemons.map((pokemon) => (
      <div key={pokemon.name} className="pokemon-card">
        <PokemonCard
          name={pokemon.name}
          url={pokemon.url}
          page={page}
          pageSize={pageSize}
          view="grid"
          imgSize={80}
        />
      </div>
    ))}
  </div>
);

export default PokemonGrid;