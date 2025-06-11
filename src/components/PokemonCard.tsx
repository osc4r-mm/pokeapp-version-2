import React from "react";
import { Link, useLocation } from "react-router-dom";
import type { PokemonCardProps } from "../types/PokemonCard";

const getPokemonId = (url: string): string | null => {
  const match = url.match(/\/pokemon\/(\d+)\//);
  return match ? match[1] : null;
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  url,
  page,
  pageSize,
  view,
  imgSize = 64,
}) => {
  const location = useLocation();
  const id = getPokemonId(url);

  return (
    <Link
      to={`/pokemon/${name}`}
      state={{ page, pageSize, from: location.pathname, view }}
      className="pokemon-link"
    >
      {id && (
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          width={imgSize}
          height={imgSize}
        />
      )}
      <div className="pokemon-name">{name}</div>
    </Link>
  );
};

export default PokemonCard;