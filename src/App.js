import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather/>
      </header>
      <div className='Footer'>
        This project was coded by Kelly O'Keefe. It is open-sourced on GitHub, and hosted on Netlify.
      </div>
    </div>
  );
}

export default App;
