import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'kifel'

  function sum (a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Meu Primeiro App</h1>
      <h2>Olá, {name}</h2>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="minha imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
