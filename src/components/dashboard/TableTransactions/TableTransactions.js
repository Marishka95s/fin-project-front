import React from 'react';
import { Component } from 'react';
import './TableTransactions.scss';

// import PropTypes from 'prop-types';

const transactions = [
  {
  "_id":{"$oid":"61942c4ce33e22d9ad42c309"},
  "type":"income",
  "category":"Остальные",
  "sum":10000,
  "comment":"ЗП",
  "date":"14.11.21",
  "month":11,
  "year":2021,
  "balance":"10000",
  "owner":{
  "$oid":"619026dfb66c91afd41aa62b"},
  "createdAt":{"$date":"2021-11-16T22:10:20.576Z"},
  "updatedAt":{"$date":"2021-11-16T22:10:20.576Z"}
},{
  "_id":{"$oid":"61942c4ce33e22d9ad42c309"},
  "type":"income",
  "category":"Остальные5",
  "sum":300,
  "comment":"ЗП2",
  "date":"16.11.21",
  "month":10,
  "year":2021,
  "balance":"300",
  "owner":{
  "$oid":"619026dfb66c91afd41aa62b"},
  "createdAt":{"$date":"2021-11-16T22:10:20.576Z"},
  "updatedAt":{"$date":"2021-11-16T22:10:20.576Z"}
},
{
  "_id":{"$oid":"61942c4ce33e22d9ad42c309"},
  "type":"income",
  "category":"Остальные1",
  "sum":6000,
  "comment":"ЗП3",
  "date":"10.11.21",
  "month":9,
  "year":2021,
  "balance":"10000",
  "owner":{
  "$oid":"619026dfb66c91afd41aa62b"},
  "createdAt":{"$date":"2021-11-16T22:10:20.576Z"},
  "updatedAt":{"$date":"2021-11-16T22:10:20.576Z"}
}
]

class TableTransactions extends Component {
  state = {
    transactions: null,
  };
  // componentDidMount() {
  //    fetch('http://localhost:3030/api/transactions/', )
  //     .then(res => res.json())
  //     .then(transactions => {        
  //       this.setState({ transactions :  transactions.data.transactions})
  //       console.log(this.state);
  //     });
  // }
  

  render() {
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        {/* {this.state.transactions && ( */}
          {transactions && (
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
                        <span className="transactions__costs">{row.type}</span>
                        <span className="transactions__costs">{row.category}</span>
                        <span className="transactions__costs">{row.comment}</span>
                        <span className="transactions__costs">{row.sum}</span>
                        <span className="transactions__costs">{row.balance}</span>
                      </li>
              )})}
            </ul>
        )}
      </div>
    );
  }
}

// TableTransactions.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default TableTransactions;
