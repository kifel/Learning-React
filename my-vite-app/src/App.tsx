import React from "react";
import "./global.css";
import { UserFetch } from "./hooks/userApi";

export const App: React.FC = () => {
  return (
    <div>
      <h1>Consumindo API do GitHub</h1>
      <UserFetch />
    </div>
  );
};
