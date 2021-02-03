import logo from './logo.svg';
import './App.css';
import JokeDisplay from './components/JokeDisplay'

function App() {
  return (
    <div className="container">
			<h1 className="text-center">Polpo Joke</h1>
			<hr></hr>
			<JokeDisplay></JokeDisplay>
    </div>
  );
}

export default App;
