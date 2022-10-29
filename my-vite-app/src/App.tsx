import React from "react";
import { CarregarDados } from "./components/carregarDados";
import './global.css';

export const App: React.FC = () => {
  return (
    <div>
      <CarregarDados url="kifel" />
    </div>
  );
};
