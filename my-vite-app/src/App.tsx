import React from "react";
import { CarregarDados } from "./components/carregarDados";
import './global.css';

export const App: React.FC = () => {
  return (
    <div>
      <h1>Consumindo API do GitHub</h1>
      <CarregarDados url="kifel" />
    </div>
  );
};
