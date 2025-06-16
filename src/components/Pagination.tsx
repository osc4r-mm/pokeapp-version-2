import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PaginationProps } from "../types/Pagination";

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view") || "list";

  return (
    <div className="my-4" style={{ textAlign: "center" }}>
      <Link
        to={`?page=${page - 1}&view=${view}`}
        className={`pokedex-btn${page === 1 ? " pointer-events-none opacity-50" : ""}`}
        aria-disabled={page === 1}
        tabIndex={page === 1 ? -1 : 0}
        onClick={e => {
          if (page === 1) e.preventDefault();
          else onPageChange(page - 1);
        }}
      >
        Anterior
      </Link>
      <span className="font-bold tracking-wide mx-4 inline-block">
        Página {page} de {totalPages}
      </span>
      <Link
        to={`?page=${page + 1}&view=${view}`}
        className={`pokedex-btn${page === totalPages ? " pointer-events-none opacity-50" : ""}`}
        aria-disabled={page === totalPages}
        tabIndex={page === totalPages ? -1 : 0}
        onClick={e => {
          if (page === totalPages) e.preventDefault();
          else onPageChange(page + 1);
        }}
      >
        Siguiente
      </Link>
    </div>
  );
};

export default Pagination;