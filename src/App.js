import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
        <div className='Container'>
        <Weather defaultCity="London"/>
      <footer className='mt-4'>
        This project was coded by <a href="https://github.com/kelly-okeefe" target='_blank' rel="noreferrer" title="Go to GitHub profile">Kelly O'Keefe</a>. 
        It is open-sourced on <a href="https://github.com/kelly-okeefe/weather-app-react" target="_blank" rel="noreferrer" title="Go to the GitHub repository">GitHub</a>, and 
        hosted on <a href="https://astonishing-babka-1e8963.netlify.app/" target='_blank' rel="noreferrer" title="Launch project">Netlify</a>.
        </footer>
    </div>
    </div>
  );
}


