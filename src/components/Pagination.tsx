import React from "react";
import { PaginationProps } from "../types/Pagination";

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => (
  <div className="my-4" style={{ textAlign: "center" }}>
  <button
    className="pokedex-btn"
    onClick={() => onPageChange(page - 1)}
    disabled={page === 1}
  >
    Anterior
  </button>
  <span className="font-bold tracking-wide mx-4 inline-block">
    Página {page} de {totalPages}
  </span>
  <button
    className="pokedex-btn"
    onClick={() => onPageChange(page + 1)}
    disabled={page === totalPages}
  >
    Siguiente
  </button>
</div>
);

export default Pagination;