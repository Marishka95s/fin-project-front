import React from 'react';
import S from './Balance.module.scss';

const Balance = () => {
  const total = 24000;

  return (
    <div className={S.wrapper}>
      <h2 className={S.title}>Ваш баланс</h2>
      <p className={S.txt}>
        <span className={S.badge}>₴</span>
        {total}
      </p>
    </div>
  );
};

export default Balance;
