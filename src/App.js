import logo from './logo.svg';
import './App.css';
import NPMapTrail from '@npmap/trail'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <NPMapTrail trailDataUrl='https://svcdev.nps.gov/data/api/v1/sites/fc8edc08-f1ec-97f3-a796-692570030ada?apikey=KXuXrDdge2Csv0xbC01JhhNNaDGcmICX&format=geojson&select=edit,trailinfo' />
      </header>
    </div>
  );
}

export default App;
