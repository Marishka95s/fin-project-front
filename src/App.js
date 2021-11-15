// import logo from './wallet-logo.svg';
import './App.scss';
import Currency from './components/currency/Currency';
import Navigation from './components/dashboard/Navigation';
import Balance from './components/dashboard/Balance';
import { Routes, Route } from 'react-router';
import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';
import Diagram from '../src/components/statistic/Diagram';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Diagram />
      <Balance />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello) I'm a wallet and I believe in you!
        </p>
        <Currency/>
        <Routes>
          <Route
            path="/fin-project-front/"
            element={<p>Допиши /registration или /login</p>}
          />
          <Route
            path="/fin-project-front/registration"
            element={<RegistrationPage />}
          />
          <Route path="/fin-project-front/login" element={<LoginPage />} />
        </Routes>
      </header>

    </div>
  );
}

export default App;