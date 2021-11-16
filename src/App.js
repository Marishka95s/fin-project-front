import React, { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PublicRoute from './components/PublicRoute'
import './App.scss';

const HomePage = lazy(() => import('./views/HomePage/HomePage'));

export default function App() {
  const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch();
    // }, [dispatch]);
  
  return( 
    
  <Suspense fallback={<p>Загружаем...</p>}>
                
    <Switch>
      {/* <PublicRoute exact path="/">
        <HomePage />
      </PublicRoute> */}
        <HomePage />
      </Switch>
    
    </Suspense>
  )
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
