import React from 'react';
import './Table.scss';

export default function Table() {
  return (
    <div>
      <div className="table">
        <div className="filter">
          <input
            className="filter__input"
            name="month"
            list="months"
            placeholder="Месяц"
          />
          {/* <!-- <datalist id="months">
                    {uniqueMonth && uniqueMonth.map(el =>
                    <option key={el} value={el} />)}
                </datalist> -->  */}

          <input
            className="filter__input"
            name="year"
            list="years"
            placeholder="Год"
          />
          {/* <!-- <datalist id="years">
                    {uniqueYear && uniqueYear.map(el =>
                    <option key={el} value={el} />)}
                </datalist> --> */}
        </div>

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
