import logo from './wallet-logo.svg';
import './App.scss';
import Currency from './components/currency/Currency';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello) I'm a wallet and I believe in you!
        </p>
        <Currency/>
      </header>

    </div>
  );
}

export default App;
