import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ViewSwitcher from "../components/ViewSwitcher";
import Pagination from "../components/Pagination";
import PokemonList from "../components/PokemonList";
import PokemonGrid from "../components/PokemonGrid";
import { Pokemon } from "../types/Pokemon";
import { fetchPokemons } from "../utils/fetchPokemons";

type ViewType = "list" | "grid";
const pageSize = 20;

const ComputerPage: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Sincroniza página y vista con la URL
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const view = (searchParams.get("view") as ViewType) || "list";

  // Carga los pokémon al cambiar de página
  useEffect(() => {
    fetchPokemons(page, pageSize).then(({ results, count }) => {
      setPokemons(results);
      setTotal(count);
    });
  }, [page]);

  const totalPages = Math.ceil(total / pageSize);

  // Actualiza la URL al cambiar de página o vista
  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage), view });
  };
  const handleViewChange = (newView: ViewType) => {
    setSearchParams({ page: String(page), view: newView });
  };

  return (
    <div className="pokedex-bg">
      <div className="pokedex-frame">
        <div className="pokedex-header">
          <div className="pokedex-led" />
          <span className="pokedex-title">PokéApp</span>
        </div>
        <ViewSwitcher view={view} setView={handleViewChange} />
        {view === "list" ? (
          <PokemonList
            pokemons={pokemons}
            page={page}
            pageSize={pageSize}
            totalPages={totalPages}
          />
        ) : (
          <PokemonGrid
            pokemons={pokemons}
            page={page}
            pageSize={pageSize}
            totalPages={totalPages}
          />
        )}
        <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ComputerPage;