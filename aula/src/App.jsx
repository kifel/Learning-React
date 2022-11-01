import { UserFetch } from "./hooks/userApi";

function App() {
  return (
    <div>
      <h1>Consumindo API do GitHub</h1>
      <UserFetch />
    </div>
  );
}

export default App;
