import Media from 'react-media';

import AuthBar from '../../components/authorization/AuthBar/AuthBar';
import Currency from '../../components/currency/Currency';
import NavigationBtns from '../../components/dashboard/Navigation';
import Balance from '../../components/dashboard/Balance/Balance';


export default function RegistrationView() {
    return (
        <>
            <Media query="(max-width: 767px)" render={() =>
            (<> <AuthBar />
                <div className="left-side-block" style={{"width" : "320px"}}>
                    
                    <NavigationBtns />
                    <Balance /> 
                    {/* <Currency/> */}
                </div>
                <div className="right-side-block" style={{"width" : "320px"}}>                    
                    {/* main part */}
                </div>
            </>
            )}
            />
            <Media query="(min-width: 768px) and (max-width: 1279px)" render={() =>
            (<> <AuthBar />
                <div className="left-side-block" style={{"width" : "768px"}}>                    
                    <NavigationBtns />
                    <Balance /> 
                    <div style={{"width" : "334px"}}>
                    <Currency/>
                    </div>
                </div>
                <div className="right-side-block" style={{"width" : "768px"}}>                    
                    {/* main part */}
                </div>
            </>
            )}
            />
            <Media query="(min-width: 1280px)" render={() =>
            (<> <AuthBar />
                <div className="left-side-block" style={{"width" : "465px"}}>                    
                    <NavigationBtns />
                    <Balance /> 
                    <div style={{"width" : "348px", "display": "inline-flex"}}>
                    <Currency/>
                    </div>
                </div>
                <div className="right-side-block" style={{"width" : "815px"}}>                    
                    {/* main part */}
                </div>
            </>
            )}
            />
        </>


    );
};



// import React, { useState, useEffect, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import ButtonAddTransaction from '../../components/transactions/ButtonAddTransaction/ButtonAddTransaction';
// import Modal from '../../components/transactions/Modal/Modal';
// import TransactionAddForm from '../../components/transactions/TransactionAddForm/TransactionAddForm';

// import {fetchTransactions} from '../../redux/transactions/transactions-operations'

// import logo from '../../wallet-logo.svg'
// export default function HomePage() {
//     const dispatch = useDispatch();

//     const [showModal, setShowModal] = useState(false);

//     useEffect(() => {
//         dispatch(fetchTransactions());
//     }, [dispatch]);

//     const toggleModal = useCallback(() => {
//         setShowModal(prevShowModal => !prevShowModal);
//     }, []);

//     return (
//         // <Container>
//         <>

//             <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello! I'm a wallet and I believe in you!
//         </p>

//       </header>
//             </div>


//             <ButtonAddTransaction onClick={toggleModal} />

//             <TransactionAddForm />

//             {showModal && (
//                 <Modal onClose={toggleModal}>
//                         <TransactionAddForm onSave={toggleModal} />
//                     </Modal>
//                 )}
//             </>
//       /* </Container> */
//     );

// }