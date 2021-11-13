import './App.scss';
import { Routes, Route } from 'react-router';

import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/fin-project-front/" element={<p>Допиши /registration или /login</p>} />
          <Route path="/fin-project-front/registration" element={<RegistrationPage />} />
          <Route path="/fin-project-front/login" element={<LoginPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
