import { useState, useCallback } from "react";
import { useDispatch } from 'react-redux';
import Modal from "../Modal";
import Select from 'react-select';
import Datatime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/ru';
import { closeModalTransaction } from "../../../redux/transactions/transactions-actions";
import { addTransaction } from "../../../redux/transactions/transactions-operations";
import './TransactionAddForm.scss';


export default function TransactionAddForm() {
    const dispatch = useDispatch();
    const onClose = useCallback(() => {
        return dispatch(closeModalTransaction());
    }, [dispatch]);

    const [optionSelect, setOptionSelect] = useState({
        value: null,
        label: ''
    });

    const [fullState, setFullState] = useState({
        type: 'income',
        sum: '',
        date: moment().format('DD.MM.YYYY'),
        coment: ''
    });

    const { type, sum, date, comment } = fullState;
    const { value } = optionSelect;

    const handleChange = e => {
    const { name, value } = e.target;

    setFullState(prev => ({
        ...prev,
        [name]: value,
    }));
    };

    let yesterday = moment().subtract( 1, 'day' );
    let valid = function( current ){
        return current.isAfter( yesterday );
    };

    const handleChangeDate = e => {
    typeof e === 'string'
        ? setFullState(prev => ({
            ...prev,
            date: e,
        }))
        : setFullState(prev => ({
            ...prev,
            date: e.format('DD.MM.YYYY'),
        }));
    };

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            const validSum = Number(sum).toFixed(2);
            dispatch(
                addTransaction({
                    date,
                    month: date.slice(3, 5),
                    year: date.slice(6),
                    validSum,
                    comment,
                    type,
                    category: value,
                }),
            );
            onClose();
        },
        [type, comment, date, value, sum, onClose, dispatch]
    );

    return (
        <Modal onClose={onClose}>
            <button type="button" className="TransactionAddForm__closeBtn" onClick={onClose}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L17 17" stroke="black"/>
                    <path d="M1 17L17 0.999999" stroke="black"/>
                </svg>
            </button>

            <p className="TransactionAddForm__title">Добавить транзакцию</p>

            <form onSubmit={handleSubmit}>
                <div className="TransactionAddForm__radio">
                        <label className="TransactionAddForm__text">Доход
                        <input
                        type="radio"
                        name="type"
                        // checked={type === "income"}
                        value="income"
                        onChange={handleChange}
                    />
                    </label>

                    <label className="TransactionAddForm__text">
                        <input
                        type="radio"
                        // checked={type === "expense"}
                        name="type"
                        value="expense"
                        onChange={handleChange}
                    />Расход
                    </label>
                    </div>

                    <Select
                    name="optionSelect"
                    onChange={setOptionSelect}
                    options={optionSelect}
                    placeholder="Выберите категорию"
                    />

                    <div>
                        <label htmlFor="">
                            <input
                                className="TransactionAddForm__input"
                            type='number'
                            name="sum"
                            value={sum}
                            onChange={handleChange}
                            placeholder="0.00"
                            required
                        />
                        </label>

                    <Datatime
                        locale="ru"
                        initialValue={moment()}
                        closeOnSelect={true}
                        timeFormat={false}
                        isValidDate={valid}
                        onChange={handleChangeDate}
                    />
                    </div>

                    <label>
                        <input
                            className="TransactionAddForm__input"
                            type='text'
                            name="comment"
                            value={comment}
                            onChange={handleChange}
                            placeholder="Комментарий"
                            required
                        />
                    </label>

                    <button type="submit" className="TransactionAddForm__addBtn">ДОБАВИТЬ</button>
                    <button type="submit" className="TransactionAddForm__cancelBtn" onClick={onClose}>ОТМЕНА</button>


            </form>
        </Modal>
    )
}

// const modalRoot = document.querySelector('#modal-root');
// class TransactionAddForm extends Component{
//     state = {
//         sum: null,
//         type: "expense",
//         category: null,
//         data: null,
//         comment: null,
//         isModalAddTransactionOpen: false
//     }
//     componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//     }

//     componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//     }

//     handleKeyDown = e => {
//     if (e.code === 'Escape') {
//         this.props.onClose();
//     }
//     };
//     handleSubmil = event => {
//         event.preventDefault();

//         // this.props.onSubmit(this.state);

//         this.reset();

//         console.log(this.state);
//     };

//     handleChange = event => {
//         const { name, value } = event.currentTarget;
//         this.setState({ [name]: value });
//     };

//     reset = () => {
//         this.setState({ sum: " ", type: "expense", category: " " , data: " ", comment: " " })
//     };


//     render() {
//         const { sum, type, category ,data, comment } = this.state

//         return createPortal(
//             <div className="TransactionAddForm__backdrop">
//                 <form className="TransactionAddForm__content" onSubmit={this.handleSubmil}>
//                     <button type="button" className="TransactionAddForm__closeBtn">
//                         <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M1 1L17 17" stroke="black"/>
//                             <path d="M1 17L17 0.999999" stroke="black"/>
//                         </svg>
//                     </button>
                    // <p className="TransactionAddForm__title">Добавить транзакцию</p>

                    // <div className="TransactionAddForm__radio">
                    //     <label className="TransactionAddForm__text">Доход
                    //     <input
                    //     type="radio"
                    //     name="type"
                    //     checked={type === "income"}
                    //     value="income"
                    //     onChange={this.handleChange}
                    // />
                    // </label>

                    // <label className="TransactionAddForm__text">
                    //     <input
                    //     type="radio"
                    //     checked={type === "expense"}
                    //     name="type"
                    //     value="expense"
                    //     onChange={this.handleChange}
                    // />Расход
                    // </label>
                    // </div>

                    // <label>
                    //     <input
                    //         className="TransactionAddForm__input"
                    //         type="text"
                    //         name="category"
                    //         value={category}
                    //         onChange={this.handleChange}
                    //         placeholder="Выберите категорию"
                    //         required
                    //     />
                    // </label>

                    // <div>
                    //     <label htmlFor="">
                    //         <input
                    //             className="TransactionAddForm__input"
                    //         type='number'
                    //         name="sum"
                    //         value={sum}
                    //         onChange={this.handleChange}
                    //         placeholder="0.00"
                    //         required
                    //     />
                    //     </label>

                    //     <label htmlFor="">
                    //         <input
                    //             className="TransactionAddForm__input"
                    //         type='data'
                    //         name="data"
                    //         value={data}
                    //         onChange={this.handleChange}
                    //         placeholder="Выберите дату"
                    //         required
                    //     />
                    // </label>
                    // </div>

                    // <label>
                    //     <input
                    //         className="TransactionAddForm__input"
                    //         type='text'
                    //         name="comment"
                    //         value={comment}
                    //         onChange={this.handleChange}
                    //         placeholder="Комментарий"
                    //         required
                    //     />
                    // </label>

                    // <button type="submit" className="TransactionAddForm__addBtn">ДОБАВИТЬ</button>
                    // <button type="submit" className="TransactionAddForm__cancelBtn">ОТМЕНА</button>

//                 </form>
//             </div>,
//             modalRoot,
//         )
//     }
// }
// export default TransactionAddForm;