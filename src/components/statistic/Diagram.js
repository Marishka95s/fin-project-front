import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';
import { transactionsSelectors } from '../../redux/transactions';

import Error from '../shared/Error';
import Chart from './Chart';
import Table from './Table';
import './Diagram.scss';
import Api from '../../api';
import React from 'react';

export default function Diagram() {
  const initialDataStat = {
    income: '-',
    expenseAll: '-',
    expenseCategory: {
      Basic: '-',
      Food: '-',
      Auto: '-',
      Development: '-',
      Children: '-',
      Home: '-',
      Education: '-',
      Others: '-',
    },
  };

  let balance = useSelector(authSelectors.getBalance);
  const curBalance = useSelector(transactionsSelectors.getCurrentBalance);
  balance = curBalance ? curBalance : balance; //if in transactions 'balance' missing - take it from user Obj

  const token = useSelector(authSelectors.getToken);

  const [statistics, setStatistics] = useState(initialDataStat); //initialDataStat
  const [monthSelected, setMonthSelected] = useState('Месяц');
  const [yearSelected, setYearSelected] = useState('Год');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    //console.log('useEffect start', Date.now());
    let month = monthSelected;
    let year = yearSelected;
    month = month === 'Месяц' ? 11 : monthSelected;
    year = year === 'Год' ? 2021 : yearSelected;

    setIsLoading(true);
    Api.fetchStatisticsAPI(month, year, token)
      .then(res => {
        if (res?.data) {
          setStatistics(res?.data);
        } else {
          throw new Error(`Ошибка при получении данных: ${res} !`);
        }
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [monthSelected, yearSelected, token]);

  const expenseList = Object.values(statistics?.expenseCategory);
  const income = statistics?.income;
  const expenseAll = statistics?.expenseAll;
  const stats = { expenseList, expenseAll, income };

  if (isLoading === true) {
    //error && console.log('isLoading before Toastify:', Date.now(), ':', error);
    const expenseList = Object.values(initialDataStat.expenseCategory);
    const income = initialDataStat.income;
    const expenseAll = initialDataStat.expenseAll;
    const stats = { expenseList, expenseAll, income };

    return (
      <section className="diagram">
        <h1 className="diagram__title">Статистика</h1>
        <div className="diagram__data">
          {stats && <Chart statistics={stats.expenseList} balance={balance} />}

          <Table
            selectedMonth={monthSelected}
            setSelectedMonth={setMonthSelected}
            selectedYear={yearSelected}
            setSelectedYear={setYearSelected}
            statistics={stats}
          />
        </div>
      </section>
    );
  } else {
    //console.log('before return data Toastify:', Date.now(), ':', error);
    return (
      <section className="diagram">
        <h1 className="diagram__title">Статистика</h1>

        <div className="diagram__data">
          {stats && <Chart statistics={stats.expenseList} balance={balance} />}

          {error && <Error errorMessage={error.message} />}

          <Table
            selectedMonth={monthSelected}
            setSelectedMonth={setMonthSelected}
            selectedYear={yearSelected}
            setSelectedYear={setYearSelected}
            statistics={stats}
          />
        </div>
      </section>
    );
  }
}