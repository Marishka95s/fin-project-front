import React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../../redux/auth';
import { transactionsSelectors } from '../../../redux/transactions';
import S from './Balance.module.scss';

const Balance = () => {
  let balance = useSelector(authSelectors.getBalance);
  const curBalance = useSelector(transactionsSelectors.getCurrentBalance);
  console.log('curBal', curBalance);

  balance = curBalance ? curBalance : balance; //if in transactions 'balance' missing - take it from user Obj

  return (
    <div className={S.wrapper}>
      <h2 className={S.title}>Ваш баланс</h2>
      <p className={S.txt}>
        <span className={S.badge}>₴</span>
        {balance}
      </p>
    </div>
  );
};
export default Balance;