import "./App.css";
import Contador from "./components/Contador";
import Frase from "./components/Frase";
import HelloWorld from "./components/HelloWorld";
import Pessoa from "./components/Pessoa";
import SayMyName from "./components/SayMyName";
 
function App() {
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name="Amanda" />
      <Pessoa
        nome="Kifel"
        idade="21"
        profissao="Developer"
        foto="https://avatars.githubusercontent.com/u/61091742?v=4"
      />
      <Frase />
      <Contador />
    </div>
  );
}

export default App;
