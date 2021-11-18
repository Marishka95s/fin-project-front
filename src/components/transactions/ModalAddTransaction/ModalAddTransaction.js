import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { closeModalTransaction } from '../../../redux/transactions/transactions-actions';
// import TransactionAddForm from '../TransactionAddForm';
import Modal from '../Modal';
// import 'react-datetime/css/react-datetime.css';
// import 'moment/locale/ru';
import './ModalAddTransaction.scss';

export default function ModalAddTransaction() {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    return dispatch(closeModalTransaction());
  }, [dispatch]);

  return (
    <Modal onClose={onClose}>
      <button
        type="button"
        className="close-modal__button"
        onClick={onClose}
      >
        999
      </button>
      {/* <TransactionAddForm /> */}
    </Modal>
  );
}