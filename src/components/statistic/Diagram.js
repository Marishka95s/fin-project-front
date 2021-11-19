import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import Chart from './Chart';
import Table from './Table';
import './Diagram.scss';
import Api from '../../api';
import React from 'react';

export default function Diagram() {
  const initialDataStat = {
    income: 123.0,
    expenseAll: 12,
    expenseCategory: {
      Basic: 6,
      Food: 2,
      Auto: 1,
      Development: 0,
      Children: 2,
      Home: 1,
      Education: 0,
      Others: 0,
    },
  };

  const [statistics, setStatistics] = useState(initialDataStat);
  const [monthSelected, setMonthSelected] = useState('Месяц');
  const [yearSelected, setYearSelected] = useState('Год');
  const [error, setError] = useState(null);

  console.log('useState(Месяц)', monthSelected);
  console.log('useState(Год)', yearSelected);

  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    let month = monthSelected;
    let year = yearSelected;
    month = month === 'Месяц' ? 11 : monthSelected;
    year = year === 'Год' ? 2021 : yearSelected;
    //console.log('Who art thou: Api', Api.fetchStatisticsAPI);

    Api.fetchStatisticsAPI(month, year, token)
      .then(res => {
        console.log('stats request started, resolve res:', res);

        if (res?.data) {
          setStatistics(res?.data);
        } else throw new Error(`Ошибка при запросе данных!!! ${res}`);
      })
      .catch(error => {
        setError(error);
        //console.log('не фартануло', error);
        //console.log('не фартануло', error.message);
      });
  }, [monthSelected, yearSelected, token]);

  if (statistics) {
    const expenseList = Object.values(statistics?.expenseCategory);
    const income = statistics?.income;
    const expenseAll = statistics?.expenseAll;
    const stats = { expenseList, expenseAll, income };

    //console.log('error', error.message);

    return (
      <section className="diagram">
        <h1 className="diagram__title">Статистика</h1>
        {error && (
          <p style={{ fontSize: '12px', color: 'red' }}>
            Подставленны локальные данные {error.message}
          </p>
        )}
        <div className="diagram__data">
          {stats && <Chart statistics={stats.expenseList} />}

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

  //console.log('stats :', statistics);

  return (
    <>
      <h1 style={{ fontSize: '50px', color: 'red' }}>
        Статистику не подвезли. Проблема с токеном, перелогинься!
      </h1>
      <p style={{ fontSize: '20px', color: 'red' }}>
        {' '}
        Сырые данные таковы
        {statistics}{' '}
      </p>
    </>
  );
}
