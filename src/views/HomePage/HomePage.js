import Media from 'react-media';

import React, { useState } from 'react';
import AuthBar from '../../components/authorization/AuthBar/AuthBar';
import Currency from '../../components/currency/Currency';
import NavigationBtns from '../../components/dashboard/Navigation';
import Balance from '../../components/dashboard/Balance/Balance';
import TableTransactions from '../../components/dashboard/TableTransactions';
import ButtonAddTransaction from '../../components/transactions/ButtonAddTransaction';
import TransactionAddForm from '../../components/transactions/TransactionAddForm/TransactionAddForm';

import './HomePage.scss';

export default function HomePage() {
    const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] = useState(false);
    const onCloseModal = () =>{
        setIsModalAddTransactionOpen(false)
    }
    const onOpenModal = () =>{
        setIsModalAddTransactionOpen(true)
    }

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
            <div className="home-statistics-blur">
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
                </div>
            </>)}
            />
            <Media query="(min-width: 1280px)" render={() =>
            (<> <AuthBar />
            <div className="page" style={{ "display": "flex"}}>
                <div className="left-side-block" style={{"width" : "378px"}}>                    
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

            
            {isModalAddTransactionOpen && <TransactionAddForm onClose={onCloseModal}/>}

        </>
    );
};
