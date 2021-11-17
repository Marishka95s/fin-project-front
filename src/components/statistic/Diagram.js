import { useState, useEffect } from 'react';
import Chart from './Chart';
import Table from './Table';
import './Diagram.scss';
import { fetchStatisticsAPI } from '../../api';
import React from 'react';

export default function Diagram() {
  const initialDataStat = {
    income: 0,
    expenceAll: 12,
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
  console.log('useState(Месяц)', monthSelected);
  console.log('useState(Год)', yearSelected);

  useEffect(() => {
    // fetchStatisticsAPI(monthSelected, yearSelected)
    //   .then(res => res.json())
    //   .then(({ data }) => {
    console.log('stats request started');
    const dataStat = {
      income: 0,
      expenceAll: 22,
      expenseCategory: {
        Basic: 6,
        Food: 2,
        Auto: 1,
        Development: 0,
        Children: 2,
        Home: 1,
        Education: 0,
        Others: 10,
      },
    };
    setStatistics(dataStat);
    //   });
  }, [monthSelected, yearSelected]);

  const expenceList = Object.values(statistics?.expenseCategory);
  const income = statistics?.income;
  const expenceAll = statistics?.expenceAll;
  const stats = { expenceList, expenceAll, income };

  return (
    <section className="diagram">
      <h1 className="diagram__title">Статистика</h1>
      <div className="diagram__data">
        <Chart statistics={stats.expenceList} />

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
