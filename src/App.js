import './App.scss';
import { Routes, Route } from 'react-router';
import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';
import AuthBar from './components/authorization/AuthBar/AuthBar';
// import Diagram from '../src/components/statistic/Diagram';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/fin-project-front/" element={<p>Допиши /registration или /login</p>} />
          <Route path="/fin-project-front/registration" element={<RegistrationPage />} />
          <Route path="/fin-project-front/login" element={<LoginPage />} />
          <Route path="/fin-project-front/bar" element={<AuthBar />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
