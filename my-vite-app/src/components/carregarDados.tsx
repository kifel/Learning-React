import React from 'react';
import { userFetch } from "../hooks/userApi";
import { User } from "../pages/Perfil";

type UserContent = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
};

interface requestApi {
  url: string;
}

export const CarregarDados: React.FC<requestApi> = ({url}) => {
  const { user, isFetching } = userFetch<UserContent>(
    `${url}`
  );

  return (
    <div className="App">
      { isFetching && <p>Carregando...</p> }
      <User name={user?.login} foto={user?.avatar_url} bio={user?.bio} login={user?.name} />
    </div>
  );
}
