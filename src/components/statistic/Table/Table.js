import React, { useState } from 'react';
import '../../shared/Dropdown';
import Dropdown from '../../shared/Dropdown';
import './Table.scss';

export default function Table() {
  const [monthSelected, setMonthSelected] = useState('Месяц');
  const [yearSelected, setYearSelected] = useState('Год');
  console.log('useState(Месяц)', monthSelected);
  console.log('useState(Год)', yearSelected);
  const monthOptions = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  const currentYear = new Date().getFullYear();
  const years = [0, -1, -2, -3];
  const yearOptions = years.map(elem => String(elem + currentYear));

  return (
    <div>
      <div className="table">
        <div className="table_select">
          <Dropdown
            selected={monthSelected}
            setSelected={setMonthSelected}
            options={monthOptions}
          />

          <Dropdown
            selected={yearSelected}
            setSelected={setYearSelected}
            options={yearOptions}
          />
        </div>

        {/* <div className="filter">
          <input
            className="filter__input"
            name="month"
            list="months"
            placeholder="Месяц"
          /> */}
        {/* <!-- <datalist id="months">
                    {uniqueMonth && uniqueMonth.map(el =>
                    <option key={el} value={el} />)}
                </datalist> -->  */}

        {/* <input
            className="filter__input"
            name="year"
            list="years"
            placeholder="Год" */}
        {/* /> */}
        {/* <!-- <datalist id="years">
                    {uniqueYear && uniqueYear.map(el =>
                    <option key={el} value={el} />)}
                </datalist> --> */}
        {/* </div> */}

        <ul className="statistics list">
          <li className="statistics__menu">
            <span className="statistics__menu-item">Категория</span>
            <span className="statistics__menu-item">Сумма</span>
          </li>

          <li className="statistics__item">
            <span className="statistics__color"></span>
            Основные расходы
            <span className="statistics__costs">100000</span>
          </li>
          <li className="statistics__item">
            <span className="statistics__color"></span>
            Продукты
            <span className="statistics__costs">200000</span>
          </li>
          <li className="statistics__item">
            <span className="statistics__color"></span>
            Машина
            <span className="statistics__costs">300000</span>
          </li>
          <li className="statistics__item">
            <span className="statistics__color"></span>
            Забота о себе
            <span className="statistics__costs">400000</span>
          </li>
          <li className="statistics__item">
            <span className="statistics__color"></span>
            Забота о детях
            <span className="statistics__costs">500000</span>
          </li>
          <li className="statistics__item">
            <span className="statistics__color"></span>
            Товары для дома
            <span className="statistics__costs">600000</span>
          </li>
          <li className="statistics__item">
            <span className="statistics__color"></span>
            Образование
            <span className="statistics__costs">700000</span>
          </li>
          <li className="statistics__item">
            <span className="statistics__color"></span>
            Досуг
            <span className="statistics__costs">800000</span>
          </li>
          <li className="statistics__item">
            <span className="statistics__color"></span>
            Другие расходы
            <span className="statistics__costs">800000</span>
          </li>
        </ul>

        <ul className="outcome list">
          <li className="outcome__item">
            <span className="outcome__type">Расходы:</span>
            <span className="outcome__total outcome__total--expenses">
              2500000
            </span>
          </li>
          <li className="outcome__item">
            <span className="outcome__type">Доходы:</span>
            <span className="outcome__total  outcome__total--income">
              5000000
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
