import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { PokemonDetailProps } from "../types/PokemonDetail";
import { fetchPokemonDetail } from "../utils/fetchPokemons";

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetailProps | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) return;
    fetchPokemonDetail(name)
      .then(setPokemon)
      .catch(() => setPokemon(null));
  }, [name]);

  if (!pokemon) return <div className="pokedex-detail">Carregant...</div>;

  const prevState = location.state as {
    page?: number;
    pageSize?: number;
    view?: "list" | "grid";
    from?: string;
  } || {};

  const handleBack = () => {
    if (prevState.page && prevState.pageSize && prevState.view) {
      navigate(
        `/?page=${prevState.page}&view=${prevState.view}`
      );
    } else {
      navigate("/");
    }
  };

  return (
    <div className="pokedex-detail">
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        width={150}
        height={150}
      />
      <br />
      <button className="pokedex-btn" onClick={handleBack}>
        Tornar al llistat
      </button>
    </div>
  );
};

export default PokemonDetail;