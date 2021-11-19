import '../../shared/Dropdown';
import Dropdown from '../../shared/Dropdown';
import schemas from '../../../assets/templates/categoriesSchema';
import './Table.scss';

export default function Table(props) {
  return (
    <div>
      <div className="table">
        <div className="table_select">
          <div className="component_select_m">
            <Dropdown
              selected={props.selectedMonth}
              setSelected={props.setSelectedMonth}
              options={schemas.monthOptions}
            />
          </div>
          <div className="component_select_y">
            <Dropdown
              selected={props.selectedYear}
              setSelected={props.setSelectedYear}
              options={schemas.yearOptions}
            />
          </div>
        </div>

        <div className="statistics__menu">
          <span className="statistics__list-title">Категория</span>
          <span className="statistics__list-title">Сумма</span>
        </div>

        <ul className="statistics list">
          {props.statistics.expenseList.map((expense, idx) => {
            if (expense === 0) {
              return;
            }
            return (
              <li key={idx} className="statistics__list-item">
                <span
                  className="statistics__color"
                  style={{ backgroundColor: schemas.colorSchema[idx] }}
                >
                  {' '}
                </span>
                <div className="statistics__category_wrap">
                  <span className="statistics__category">
                    {schemas.categoriesSchema[idx]}
                  </span>
                </div>
                <span className="statistics__costs">{expence}</span>
              </li>
            );
          })}
        </ul>

        <ul className="outcome list">
          <li className="outcome__item">
            <span className="outcome__type">Расходы:</span>
            <span className="outcome__total outcome__total--expenses">
              {props.statistics.expenseAll}
            </span>
          </li>
          <li className="outcome__item">
            <span className="outcome__type">Доходы:</span>
            <span className="outcome__total  outcome__total--income">
              {props.statistics.income}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
