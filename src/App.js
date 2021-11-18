import logo from './wallet-logo.svg';

import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import Loader from 'react-loader-spinner';

import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'

import './App.scss';

// import { Routes, Route } from 'react-router';
// import RegistrationPage from './views/RegistrationPage/RegistrationPage';
// import LoginPage from './views/LoginPage/LoginPage';


import TableTransactions from './components/dashboard/TableTransactions';

const HomePage = lazy(() => import('./views/HomePage/HomePage'))
const StatisticPage = lazy(() => import('./views/StatisticPage/StatisticPage'))
const CurrencyPage = lazy(() => import('./views/CurrencyPage/CurrencyPage'))

const RegistrationPage = lazy(() => import('./views/RegistrationPage/RegistrationPage' /* webpackChunkName: "RegisterView"*/),);
const LoginPage = lazy(() => import('./views/LoginPage/LoginPage' /* webpackChunkName: "LoginView"*/),);

export default function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const name = useSelector(authSelectors.getUserName)
  console.log(isLoggedIn)
  console.log(name)

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);


  return (
    /* !isFetchingCurrentUser && */
    (
      <div className="App">
        <Suspense fallback={<Loader type="ThreeDots" color="brown" height={80} width={80} />}>

          <Switch>
            <PublicRoute exact path="/fin-project-front/registration" redirectTo="/fin-project-front/home">
              <RegistrationPage />
            </PublicRoute>

            <PublicRoute path="/fin-project-front/login" restricted redirectTo="/fin-project-front/home">
              <LoginPage />
            </PublicRoute>

            {/* CHANGE INTO PrivateRoute */}
            <PublicRoute path="/fin-project-front/home" redirectTo="/fin-project-front/login">
              <HomePage />
            </PublicRoute>

            {/* CHANGE INTO PrivateRoute */}
            <PublicRoute path="/fin-project-front/statistics" redirectTo="/fin-project-front/login">
              <StatisticPage />
            </PublicRoute>

            {/* CHANGE INTO PrivateRoute */}
            <PublicRoute path="/fin-project-front/currency" redirectTo="/fin-project-front/login">
              <CurrencyPage />
            </PublicRoute>

            <PublicRoute>
              <Redirect to="/fin-project-front/registration" />
            </PublicRoute>
          </Switch>
        </Suspense>



        {/* 
          <Navigation />
          <Diagram />
          <Balance /> 
          <Currency/>
          */}

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello) I'm a wallet and I believe in you!
        </p>
         */}
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
        {/* </header> */}
      </div>
    ));
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
