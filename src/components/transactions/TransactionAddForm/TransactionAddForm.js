import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Modal from "../Modal";
import Select from 'react-select';
import Switch from 'react-switch';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'moment/locale/ru';
// import { getCategories } from '../../../redux/categories/categories-operations';
// import { getAllCategories } from '../../../redux/categories/categories-selectors';
import { closeModalTransaction } from "../../../redux/transactions/transactions-actions";
import { transactionsOperations } from "../../../redux/transactions";
import customStyles from './SelectStyles';
import "react-datetime/css/react-datetime.css";
import './TransactionAddForm.scss';


export default function TransactionAddForm({ onClose }) {
    const dispatch = useDispatch();
    // const onClose = useCallback(() => {
    //     return dispatch(closeModalTransaction());
    // }, [dispatch]);

    const [selectedOption, setSelectedOption] = useState({
        value: null,
        label: ''
    });

    const [fullState, setFullState] = useState({
        checked: true,
        sum: '',
        date: moment().format('DD.MM.YYYY'),
        coment: '',
        boxShadow: '0px 6px 15px rgba(255, 101, 150, 0.5)'
    });

    const { checked, sum, date, comment, boxShadow } = fullState;
    const { value } = selectedOption;

    useEffect(() => {
        if (checked) {
            setFullState(prev => ({
                ...prev,
                boxShadow: '0px 6px 15px rgba(255, 101, 150, 0.5)',
            }));
            return;
        }

        setFullState(prev => ({
            ...prev,
            boxShadow: '0px 6px 15px rgba(36, 204, 167, 0.5)',
        }));
    }, [checked]);

    const handleChangeCheckbox = nextChecked => {
        setFullState(prev => ({
            ...prev,
            checked: nextChecked,
            value: null,
            label: '',
        }));
    };

    //     useEffect(() => {
    //     dispatch(getCategories());
    //   }, [dispatch]);
    //   const categories = useSelector(getAllCategories);

    const handleChange = e => {
        const { name, value } = e.target;

        setFullState(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const yesterday = moment().subtract(1, 'day');
  const valid = current => current.isAfter(yesterday);
  const inputProps = {
      className: 'input date__input',
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
                    transactionsOperations.addTransaction({
                        date,
                        month: date.slice(3, 5),
                        year: date.slice(6),
                        validSum,
                        comment,
                        type: !checked ? 'income' : 'spend',
                        category: value,
                    }),
                );
                onClose();
            },
            [checked, comment, date, value, sum, onClose, dispatch]
        );

        let optionsIncome = [];
        let optionsSpend = [];

        //   const sort = array => {
        //     array.forEach(({ _id, name }) =>
        //       name === 'Регулярный доход' || name === 'Нерегулярный доход'
        //         ? optionsIncome.push({
        //             value: _id,
        //             label: name,
        //           })
        //         : optionsSpend.push({
        //             value: _id,
        //             label: name,
        //           }),
        //     );
        //   };
        //   sort(categories);

        return (
            // <p>M O D A L</p>

            <Modal onClose={onClose}>
                <button type="button" className="TransactionAddForm__closeBtn" onClick={onClose}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L17 17" stroke="black" />
                        <path d="M1 17L17 0.999999" stroke="black" />
                    </svg>
                </button>

                <p className="TransactionAddForm__title">Добавить транзакцию</p>

                <form className="TransactionAddForm__form" onSubmit={handleSubmit}>
                    <div className="checkbox__wrapper">
                        <span className={`checkbox__span ${!checked && 'active-income'}`}>
                            Доход
                        </span>
                        <Switch
                            name="checked"
                            value={checked}
                            onChange={handleChangeCheckbox}
                            checked={checked}
                            className="Checkbox__button"
                            height={40}
                            width={80}
                            handleDiameter={44}
                            onHandleColor="#FF6596"
                            offHandleColor="#24cca7"
                            onColor="#fff"
                            offColor="#fff"
                            boxShadow={boxShadow}
                            checkedHandleIcon={
                             <svg className="add-transaction__icon" id="add-icon" width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1L20 0.999999" stroke="white" stroke-width="2"/>
</svg>
                            }
                            uncheckedHandleIcon={
                                <svg className="switch-icon__spend" id="spend-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0V20" stroke="white" stroke-width="2"/>
<path d="M0 10L20 10" stroke="white" stroke-width="2"/>
</svg>
                        }
                        />
                        <span className={`Checkbox__span ${checked && 'active-spend'}`}>
                            Расход
                        </span>
                    </div>

                    {checked && (
                        <div className="select__wrapper">
                            <Select
                                name="selectedOption"
                                onChange={setSelectedOption}
                                options={optionsSpend}
                                placeholder="Выберите категорию"
                                styles={customStyles}
                            />
                            <svg className="select__icon" id="arrow-icon" width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L10 10L19 1" stroke="black"/>
</svg>
                        </div>
                    )}
                    {!checked && (
                        <div className="select__wrapper">
                            <Select
                                name="selectedOption"
                                onChange={setSelectedOption}
                                options={optionsIncome}
                                placeholder="Выберите категорию"
                                styles={customStyles}
                            />
                            {/* <Icons className="select__icon" id="arrow-icon" /> */}
                        </div>
                    )}

                    <div className="form__wrapper">
                        <label className="form__sum">
                            <input
                                name="sum"
                                value={sum}
                                onChange={handleChange}
                                type="text"
                                maxLength="6"
                                className="input sum__input"
                                placeholder="0.00"
                                required
                            ></input>
                        </label>

                        <Datetime
                            className="date__wrapper"
                            locale="ru"
                            initialValue={moment()}
                            closeOnSelect={true}
                            timeFormat={false}
                            inputProps={inputProps}
                            isValidDate={valid}
                            onChange={handleChangeDate}
                        />
                        {/* <svg className="date__icon" id="calendar-icon" width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_4_1061)">
<path d="M10 11H8V13H10V11ZM14 11H12V13H14V11ZM18 11H16V13H18V11ZM20 4H19V2H17V4H9V2H7V4H6C4.89 4 4.01 4.9 4.01 6L4 20C4 21.1 4.89 22 6 22H20C21.1 22 22 21.1 22 20V6C22 4.9 21.1 4 20 4ZM20 20H6V9H20V20Z" fill="#4A56E2"/>
</g>
<defs>
<filter id="filter0_d_4_1061" x="-3" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_1061"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_1061" result="shape"/>
</filter>
</defs>
</svg> */}
                        </div>

                    <label className="form__text">
                        <input
                            name="comment"
                            value={comment}
                            type="text"
                            onChange={handleChange}
                            className="input text__input"
                            placeholder="Комментарий"
                        ></input>
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