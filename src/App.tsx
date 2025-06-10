import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComputerPage from "./pages/ComputerPage";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComputerPage />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;