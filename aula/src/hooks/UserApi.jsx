import axios from "axios";
import { useState } from "react";
import { Pages } from "../pages";

export function UserFetch() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("Not Found");
  const [name, setName] = useState("Not Found");
  const [login, setLogin] = useState("Not Found");
  const [avatar_url, setAvatar_url] = useState("Not Found");
  const [bio, setBio] = useState("Not Found");

  const handleSearch = () => {
    axios
      .get(`https://api.github.com/users/${search}`)
      .then((response) => {
        setName(response.data.name);
        setLogin(response.data.login);
        setAvatar_url(response.data.avatar_url);
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
        {!isFetching && (
          <Pages name={name} foto={avatar_url} bio={bio} login={login} />
        )}
      </div>
    </div>
  );
}
