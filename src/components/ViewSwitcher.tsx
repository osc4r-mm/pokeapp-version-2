import React from "react";
import { ViewSwitcherProps } from "../types/ViewSwitcher";

const VIEWS = [
  { key: "list", label: "Llistat" },
  { key: "grid", label: "Graella" },
];

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ view, setView }) => (
  <div className="pokedex-switcher">
    {VIEWS.map(({ key, label }) => (
      <button
        key={key}
        className={`pokedex-btn${view === key ? " active" : ""}`}
        onClick={() => setView(key as "list" | "grid")}
      >
        {label}
      </button>
    ))}
  </div>
);

export default ViewSwitcher;