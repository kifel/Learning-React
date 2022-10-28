import React from "react";
import { CarregarDados } from "./components/carregarDados";

export const App: React.FC = () => {
  return (
    <div className="App">
      <CarregarDados url="HabnerPhillippe" />
    </div>
  );
};
