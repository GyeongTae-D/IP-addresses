import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner title="Sextant" />
      <Exhibit>
        <h2>Welcome to Sextant</h2>
        <p>This is a simple exhibit component to display information.</p>
      </Exhibit>
    </div>
  );
}

export default App;
