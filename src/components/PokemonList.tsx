import React from "react";
import { PokemonListProps } from "../types/PokemonList";
import { Link, useLocation } from "react-router-dom";

const getPokemonId = (url: string): string | null => {
  const match = url.match(/\/pokemon\/(\d+)\//);
  return match ? match[1] : null;
};

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  page,
  pageSize,
}) => {
  const location = useLocation();

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => {
        const id = getPokemonId(pokemon.url);
        return (
          <li key={pokemon.name}>
            <Link
              to={`/pokemon/${pokemon.name}`}
              state={{ page, pageSize, from: location.pathname, view: "list" }}
              className="pokemon-link"
            >
              {id && (
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt={pokemon.name}
                  width={50}
                  height={50}
                />
              )}
              <div className="pokemon-name">{pokemon.name}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonList;