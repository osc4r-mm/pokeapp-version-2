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

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const view = (searchParams.get("view") as ViewType) || "list";

  useEffect(() => {
    fetchPokemons(page, pageSize).then(({ results, count }) => {
      setPokemons(results);
      setTotal(count);
    });
  }, [page]);

  const totalPages = Math.ceil(total / pageSize);

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
          <h1 className="pokedex-title">PokéApp</h1>
          <span className="pokedex-led-small" />
          <span className="pokedex-led-small" style={{ background: "radial-gradient(circle, #fff176 60%, #fbc02d 100%)" }} />
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
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ComputerPage;