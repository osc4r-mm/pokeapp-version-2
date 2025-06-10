import React from "react";
import { ViewSwitcherProps } from "../types/ViewSwitcher";

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ view, setView }) => (
  <div className="pokedex-switcher">
    <button
      className={`pokedex-btn${view === "list" ? " active" : ""}`}
      onClick={() => setView("list")}
    >
      Llistat
    </button>
    <button
      className={`pokedex-btn${view === "grid" ? " active" : ""}`}
      onClick={() => setView("grid")}
    >
      Graella
    </button>
  </div>
);

export default ViewSwitcher;