import React from "react";
import { userFetch } from "./hooks/userApi";
import { User } from "./pages/Perfil";

type UserContent = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
};

export const App: React.FC = () => {
  const { user, isFetching } = userFetch<UserContent>(
    'kifel'
  );

  return (
    <div className="App">
      { isFetching && <p>Carregando...</p> }
      <User name={user?.name} foto={user?.avatar_url} bio={user?.bio} />
    </div>
  );
};
