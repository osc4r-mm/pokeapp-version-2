import React from "react";
import { PokemonGridProps } from "../types/PokemonGrid";
import { Link, useLocation } from "react-router-dom";

const getPokemonId = (url: string): string | null => {
  const match = url.match(/\/pokemon\/(\d+)\//);
  return match ? match[1] : null;
};

const PokemonGrid: React.FC<PokemonGridProps> = ({
  pokemons,
  page,
  pageSize,
  totalPages,
}) => {
  const location = useLocation();

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => {
        const id = getPokemonId(pokemon.url);
        return (
          <div key={pokemon.name} className="pokemon-card">
            <Link
              to={`/pokemon/${pokemon.name}`}
              state={{ page, pageSize, from: location.pathname, view: "grid" }}
              className="pokemon-link"
            >
              {id && (
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt={pokemon.name}
                  width={80}
                  height={80}
                />
              )}
              <div className="pokemon-name">{pokemon.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonGrid;