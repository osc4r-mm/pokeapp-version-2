import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { PokemonDetailData } from "../types/PokemonDetail";
import { fetchPokemonDetail } from "../utils/fetchPokemons";

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetailData | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) return;
    fetchPokemonDetail(name)
      .then(setPokemon)
      .catch(() => setPokemon(null));
  }, [name]);

  if (!pokemon) return <div className="pokedex-detail">Carregant...</div>;

  const prevState = location.state as Record<string, unknown> || {};

  return (
    <div className="pokedex-detail">
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        width={150}
        height={150}
      />
      <br />
      <button
        className="pokedex-btn"
        onClick={() => navigate("/", { state: prevState })}
      >
        Tornar al llistat
      </button>
    </div>
  );
};

export default PokemonDetail;