import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonAddTransaction from '../../components/transactions/ButtonAddTransaction/ButtonAddTransaction';
import Modal from '../../components/transactions/Modal/Modal';
import TransactionAddForm from '../../components/transactions/TransactionAddForm/TransactionAddForm';

import {fetchTransactions} from '../../redux/transactions/transactions-operations'

import logo from '../../wallet-logo.svg'
export default function HomePage() {
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);

    const toggleModal = useCallback(() => {
        setShowModal(prevShowModal => !prevShowModal);
    }, []);

    return (
        // <Container>
        <>

            <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! I'm a wallet and I believe in you!
        </p>

      </header>
            </div>


            <ButtonAddTransaction onClick={toggleModal} />

            <TransactionAddForm />

            {showModal && (
                <Modal onClose={toggleModal}>
                        <TransactionAddForm onSave={toggleModal} />
                    </Modal>
                )}
            </>
      /* </Container> */
    );

}