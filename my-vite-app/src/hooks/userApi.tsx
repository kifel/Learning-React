import axios from "axios";
import { useState } from "react";
import { User } from "../pages/Perfil";

type UserContent = {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
};

export function UserFetch<T = unknown>() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [search, setSearch] = useState("Not Found");
  const [name, setName] = useState("Not Found");
  const [login, setLogin] = useState("Not Found");
  const [avatarUrl, setAvatarUrl] = useState("Not Found");
  const [bio, setBio] = useState("Not Found");

  const handleSearch = () => {
    console.log(search);
    axios
      .get<UserContent>(`https://api.github.com/users/${search}`)
      .then((response) => {
        setName(response.data.name);
        setLogin(response.data.login);
        setAvatarUrl(response.data.avatar_url);
        setBio(response.data.bio);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  return (
    <div>
      <div className="App">
        <input
          type="text"
          placeholder="Usuário do Github"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Enviar</button>
      </div>
      <div className="content">
      {isFetching && <p>Aguardando...</p>}
      {!isFetching && <User name={name} foto={avatarUrl} bio={bio} login={login} />}
      </div>
    </div>
  );
}
