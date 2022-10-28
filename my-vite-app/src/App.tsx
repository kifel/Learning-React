import React, { useState } from "react";
import { User } from "./pages/Perfil";


interface UserContent {
  login: string;
  avatar_url: string;
  bio: string;
}

export const App: React.FC = () => {
  const [user, setUser] = useState<UserContent>();

  async function loadData() {
    const response = await fetch("https://api.github.com/users/kifel");
    const data = await response.json();

    setUser(data);
  }
  
  loadData();

  return (
    <div className="App">
      <User
        name={user?.login}
        foto={user?.avatar_url}
        bio={user?.bio}
      />
    </div>
  );
};
