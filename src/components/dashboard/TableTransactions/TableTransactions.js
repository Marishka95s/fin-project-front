import React from 'react';
import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';



// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
// });


class TableTransactions extends Component {
  state = {
    transactions: null,
  };
  componentDidMount() {
     fetch('http://localhost:3030/api/transactions/', )
      .then(res => res.json())
      .then(transactions => {        
        this.setState({ transactions :  transactions.data.transactions})
        console.log(this.state);
      });
  }

  render() {
    return (
      <div>
        {this.state.transactions && (
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Дата</TableCell>
                  <TableCell>Тип</TableCell>
                  <TableCell>Категория</TableCell>
                  <TableCell>Комментарий</TableCell>
                  <TableCell>Сумма</TableCell>
                  <TableCell>Баланс</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.transactions.map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.createdAt.$date}
                      </TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.comment}</TableCell>
                      <TableCell>{row.sum}</TableCell>
                      <TableCell>{row.balance}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        )}
      </div>
    );
  }
}

// TableTransactions.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default TableTransactions;
