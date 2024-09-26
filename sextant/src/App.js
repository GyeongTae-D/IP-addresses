import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPDisplay from './IPDisplay';

function App() {
  return (
    <div className="App">
      <Banner title="Sextant" />
      <Exhibit>
        <IPDisplay version="IPv4" />
      </Exhibit>
      <Exhibit>
        <IPDisplay version="IPv6" />
      </Exhibit>
    </div>
  );
}

export default App;