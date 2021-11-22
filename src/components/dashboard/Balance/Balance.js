import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';

//import { authSelectors } from '../../../redux/auth';
import { balanceOperations, balanceSelectors } from '../../../redux/balance';
import style from './Balance.module.scss';

const Balance = () => {
  const dispatch = useDispatch();
  //const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    dispatch(balanceOperations.fetchBalance());
  }, [dispatch]);

  const isLoading = useSelector(balanceSelectors.getBalanceIsLoading);
  const balance = useSelector(balanceSelectors.getBalance);

  if (!isLoading) {
    return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Ваш баланс</h2>
        <p className={style.txt}>
          <span className={style.badge}>₴</span>
          {balance}
        </p>
      </div>
    );
  } else {
    return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Ваш баланс</h2>
        <p className={style.txtIsLoading}>
          <span className={style.badge}>₴</span>
          {balance}
        </p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    balance: state.balance.balance,
  };
};

export default connect(mapStateToProps)(Balance);
