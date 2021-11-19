import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from "../Modal";
import Select from 'react-select';
import Datatime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/ru';
import { closeModalTransaction } from "../../../redux/transactions/transactions-actions";
import { transactionsOperations, transactionsSelectors } from "../../../redux/transactions";
import './TransactionAddForm.scss';


export default function TransactionAddForm({onClose}) {
    const dispatch = useDispatch();
    // const onClose = useCallback(() => {
    //     return dispatch(closeModalTransaction());
    // }, [dispatch]);

    useEffect(() => {
        dispatch(transactionsOperations.getCategories());
      }, [dispatch]);

    const transactionCategories = useSelector(transactionsSelectors.getTransactionCategories);
    const optionSelect = transactionCategories.map(e=>{return {
        value: e, label: e
        }
    })
   

    // const [optionSelect, setOptionSelect] = useState({
    //     value: null,
    //     label: ''
    // });

    const [fullState, setFullState] = useState({
        type: 'income',
        sum: '',
        coment: '',
        category:'',
    });
    

    const { type, sum, comment, category } = fullState;
    // const { value } = optionSelect;

    const onChangeSelect = (e)=>{
        console.log(e.value)
        setFullState(prev => ({
            ...prev,
            category: e.value,
        }))
    }
    const handleChange = e => {
    const { name, value } = e.target;
    setFullState(prev => ({
        ...prev,
        [name]: value,
    }));
    };

    // let yesterday = moment().subtract( 1, 'day' );
    // let valid = function( current ){
    //     return current.isAfter( yesterday );
    // };

    // const handleChangeDate = e => {
    // typeof e === 'string'
    //     ? setFullState(prev => ({
    //         ...prev,
    //         date: e,
    //     }))
    //     : setFullState(prev => ({
    //         ...prev,
    //         date: e.format('DD.MM.YY'),
    //     }));
    // };

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            const validSum = Number(sum).toFixed(2);
            dispatch(
                transactionsOperations.addTransaction({
                    sum: validSum,
                    comment,
                    type,
                    category,
                }),
            );
            onClose();
        },
        [type, comment, sum, category, onClose, dispatch]
    );

    return (
        // <p>M O D A L</p>

        <Modal onClose={onClose}>
            <button type="button" className="TransactionAddForm__closeBtn" onClick={onClose}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L17 17" stroke="black"/>
                    <path d="M1 17L17 0.999999" stroke="black"/>
                </svg>
            </button>

            <p className="TransactionAddForm__title">Добавить транзакцию</p>

            <form className="TransactionAddForm__form" onSubmit={handleSubmit}>
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
                    onChange={onChangeSelect}
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
                        // isValidDate={valid}
                        // onChange={handleChangeDate}
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