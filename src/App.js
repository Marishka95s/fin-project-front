import logo from './wallet-logo.svg';

import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PublicRoute from './components/PublicRoute'

import './App.scss';
import Currency from './components/currency/Currency';
import Navigation from './components/dashboard/Navigation';
import Balance from './components/dashboard/Balance/Balance';
// import { Routes, Route } from 'react-router';
import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';
import Diagram from '../src/components/statistic/Diagram';

const HomePage = lazy(() => import('./views/HomePage/HomePage'))

export default function App() {
  const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch();
    // }, [dispatch]);

  return( 
    <div className="App">
        <Suspense fallback={<p>Загружаем...</p>}>

        <Switch>
          {/* <PublicRoute exact path="/">
          <HomePage />
          </PublicRoute> */}
          <HomePage />
        </Switch>

        </Suspense>

      <Navigation />
      <Diagram />
      <Balance />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello) I'm a wallet and I believe in you!
        </p>
        <Currency/>
        {/* <Routes>
          <Route
            path="/fin-project-front/"
            element={<p>Допиши /registration или /login или /statistics</p>}
          />
          <Route
            path="/fin-project-front/registration"
            element={<RegistrationPage />}
          />
          <Route path="/fin-project-front/login" element={<LoginPage />} />
          <Route path="/fin-project-front/statistics" element={<Diagram />} />
        </Routes> */}
      </header>

    </div>
  );
}
// class App extends Component {
//   state = {
//     transactions: [],
//     isModalAddTransactionOpen: false,
//   };

//   // componentDidMount() {
//   //   const transactions = localStorage.getItem('transactins');
//   //   const parsedTransactions = JSON.parse(this.transactions);

//   //   if (parsedTransactions) {
//   //     this.setState({ transactions: parsedTransactions });
//   //   }
//   // }

//   tooggleModal = () => {
//     this.setState(({ isModalAddTransactionOpen }) => ({
//       isModalAddTransactionOpen: !isModalAddTransactionOpen,
//     }));
//   };
//   render() {
//     const { isModalAddTransactionOpen } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hello! I'm a wallet and I believe in you!
//           </p>

//         </header>
//         <ButtonAddTransaction onClick={this.tooggleModal} />

//         {isModalAddTransactionOpen && (
//           <TransactionAddForm onClose={this.tooggleModal} /> )}
//         {/* <TransactionAddForm onSubmit={this.formSubmitHandler} /> */}
//       </div>
//     );
//   }
// }

// export default App;