import React, {useEffect} from 'react';
import './TableTransactions.scss';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsOperations, transactionsSelectors } from "../../../redux/transactions";
// import PropTypes from 'prop-types';

export default function TableTransactions() {  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions());
  }, [dispatch]);
  const transactions = useSelector(transactionsSelectors.getAllTransactions);
  
    return ((!transactions.length) && (<><h1 style={{ padding: '20px'}}>Welcome to your wallet! Here would be shown your transactios</h1> 
      <h2 style={{ color: 'LightSeaGreen'}}> Click "+" to add one </h2></>) ||
      (transactions.length) &&
      (<div className="transactionscContainer" style={{ display: 'flex', justifyContent: 'center' }}
      >
        {window.matchMedia('( max-width:767px)').matches ? (
          <ul style={{paddingLeft:0, paddingTop:0, margin:0}}>
            {transactions.map(row => {
              return (
                <ul className={"transactions__list__mobile " + "transactions__list__mobile" + row.type}  id={row._id}>
                  <li className="transactions__item__mobile">                    
                    <span className="transactions__menu-item">Дата</span>
                    <span className="">{row.date}</span>
                  </li>
                  <li className="transactions__item__mobile">                    
                    <span className="transactions__menu-item">Тип</span>
                    <span className="transactions__item__mobile__data">{row.type === 'expense' ? '-' : '+'}</span>
                  </li>
                   <li className="transactions__item__mobile">                    
                    <span className="transactions__menu-item">Категория</span>
                    <span className="transactions__item__mobile__data">{row.category}</span>
                  </li>
                  <li className="transactions__item__mobile">                    
                    <span className="transactions__menu-item">Комментарий</span>
                    <span className="transactions__item__mobile__data">{row.comment}</span>
                  </li>
                   <li className="transactions__item__mobile">                    
                    <span className="transactions__menu-item">Сумма</span>
                    <span className={'transactions__item__mobile__data__' + row.type}>{row.sum}</span>
                  </li>
                  <li className="transactions__item__mobile">                    
                    <span className="transactions__menu-item">Баланс</span>
                    <span className="transactions__item__mobile__data">{row.balance}</span>
                  </li>                       

                </ul>
              );
            })}
          </ul>
        )
          :
          (
          <ul className="transactions list">
            <li className="transactions__menu">
              <span className="transactions__menu-item">Дата</span>
              <span className="transactions__menu-item">Тип</span>
              <span className="transactions__menu-item">Категория</span>
              <span className="transactions__menu-item">Комментарий</span>
              <span className="transactions__menu-item">Сумма</span>
              <span className="transactions__menu-item">Баланс</span>
            </li>
            {transactions.map(row => {
              return (
                <li className="transactions__item" id={row._id}>
                  <span className="transactions__costs">{row.date}</span>
                  <span className="transactions__costs">
                    {row.type === 'expense' ? '-' : '+'}
                  </span>
                  <span className="transactions__costs">{row.category}</span>
                  <span className="transactions__costs">{row.comment}</span>
                  <span className={'transactions__costs__' + row.type}>
                    {row.sum}
                  </span>
                  <span className="transactions__costs">{row.balance}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>)
    );
  }

// TableTransactions.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
