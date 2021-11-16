import { useDispatch } from 'react-redux';
import { openModalTransaction } from '../../../redux/transactions/transactions-actions';
import "./ButtonAddTransaction.scss";

// export default function ButtonAddTransaction() {
//   const dispatch = useDispatch();

//   return (
//     <div className="btn">
//       <button type="button" className="button" onClick={() => dispatch(openModalTransaction())}>
//         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M10 0V20" stroke="white" strokeWidth="2" />
//           <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
//         </svg>
//       </button>
//     </div>
//   );
// };


import React, { Component } from 'react';
class ButtonAddTransaction extends Component {
  state = {
    isModalAddTransactionOpen: false,
  }
  openModal = () => {
    this.setState(({ isModalAddTransactionOpen }) => ({
      isModalAddTransactionOpen: !isModalAddTransactionOpen,
    }))
    console.log('opennn')
  };

  render() {
    return (
      <button type="button" className="ButtonAddTransaction" onClick={this.openModal}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0V20" stroke="white" strokeWidth="2"/>
          <path d="M0 10L20 10" stroke="white" strokeWidth="2"/>
        </svg>
      </button>
    );
  }
};

export default ButtonAddTransaction;