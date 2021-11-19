import Media from 'react-media';

import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModalTransaction } from '../../redux/transactions/transactions-actions';
import AuthBar from '../../components/authorization/AuthBar/AuthBar';
import Currency from '../../components/currency/Currency';
import NavigationBtns from '../../components/dashboard/Navigation';
import Balance from '../../components/dashboard/Balance/Balance';
import TableTransactions from '../../components/dashboard/TableTransactions';
import ButtonAddTransaction from '../../components/transactions/ButtonAddTransaction';
import Modal from '../../components/transactions/Modal';
// import TransactionAddForm from '../../components/transactions/TransactionAddForm';
import TransactionAddForm from '../../components/transactions/TransactionAddForm/TransactionAddForm';

import { transactionsOperations } from '../../redux/transactions';

import { getIsModalAddTransactionOpen } from '../../redux/transactions/transactions-selectors';

import './HomePage.scss';

export default function HomePage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const onCloseModal = () =>{
        setModalIsOpen(false)
    }
    const onOpenModal = () =>{
        setModalIsOpen(true)
    }
    // const isModalAddTransactionOpen = useSelector(getIsModalAddTransactionOpen);
    
    // const dispatch = useDispatch();
    // const onClose = useCallback(() => {
    // return dispatch(closeModalTransaction());
    // }, [dispatch]);

    // const dispatch = useDispatch();
    // const [isModalAddTransactionOpen , setIsModalAddTransactionOpen ] = useState(false);

    // useEffect(() => {
    //     dispatch(transactionsOperations.fetchTransactions());
    // }, [dispatch]);

    // const toggleModal = useCallback(() => {
    //     setIsModalAddTransactionOpen(prevIsModalAddTransactionOpen => !prevIsModalAddTransactionOpen);
    // }, []);

    return (
        <>
            <Media query="(max-width: 767px)" render={() =>
            (<> <AuthBar />
                <div className="left-side-block" style={{"width" : "320px"}}>
                    
                    <NavigationBtns />
                    <Balance /> 
                </div>
                <div className="right-side-block" style={{"width" : "320px"}}>                    
                    <TableTransactions/>
                </div>
            </>
            )}
            />
            <Media query="(min-width: 768px) and (max-width: 1279px)" render={() =>
            (<> <AuthBar />
                <div className="left-side-block tablet-placement" style={{"width" : "768px"}}>         
                    <div className="sub-division-tablet">           
                        <NavigationBtns />
                        <Balance /> 
                    </div>
                <div style={{"width" : "334px", "display": "inline-flex"}}>
                    <Currency/>
                </div>
                </div>
                <div className="right-side-block" style={{"width" : "768px"}}>                    
                    <TableTransactions/>
                </div>
            </>)}
            />
            <Media query="(min-width: 1280px)" render={() =>
            (<> <AuthBar />
            <div className="page" style={{ "display": "flex"}}>
                <div className="left-side-block" style={{"width" : "465px"}}>                    
                    <NavigationBtns />
                    <Balance /> 
                    <div style={{"width" : "348px", "display": "inline-flex"}}>
                        <Currency/>
                    </div>
                </div>
                <div className="right-side-block" style={{"width" : "815px", borderLeft: "1px #fff solid"}}>                    
                    <TableTransactions/>
                </div>
            </div>
            </>
            )}
            />

            <ButtonAddTransaction onOpen={onOpenModal} />

            
            {modalIsOpen && <TransactionAddForm onClose={onCloseModal}/>}
            {/* {isModalAddTransactionOpen && <TransactionAddForm onClose={toggleModal} />} */}

        </>


    );
};



// import React, { useState, useEffect, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import ButtonAddTransaction from '../../components/transactions/ButtonAddTransaction/ButtonAddTransaction';
// import Modal from '../../components/transactions/Modal/Modal';
//import TransactionAddForm from '../../components/transactions/TransactionAddForm/TransactionAddForm';

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