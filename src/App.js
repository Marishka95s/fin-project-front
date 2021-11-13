import logo from './wallet-logo.svg';
import './App.scss';
import Diagram from '../src/components/statistic/Diagram';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Diagram />
        <p>Hello) I'm a wallet and I believe in you!</p>
      </header>
    </div>
  );
}

export default App;
