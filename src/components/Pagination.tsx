import React from "react";
import { PaginationProps } from "../types/Pagination";

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => (
  <div style={{ marginTop: "1rem", marginBottom: "1rem", textAlign: "center" }}>
    <button
      className="pokedex-btn"
      onClick={() => onPageChange(page - 1)}
      disabled={page === 1}
    >
      Anterior
    </button>
    <span style={{ margin: "0 1rem", fontWeight: "bold", letterSpacing: "1px" }}>
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