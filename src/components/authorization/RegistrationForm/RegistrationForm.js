import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProgressBar from '@ramonak/react-progress-bar'
import { Formik } from 'formik'
import * as yup from 'yup'
import operations from '../../../redux/auth/auth-operations';
import '../authForm.scss'
export default function RegistrationForm() {
    const dispatch = useDispatch()
    const [progressValue, setProgressValue] = useState(0)

    const progressUp = () => {
        if (progressValue <= 4) {

            setProgressValue(prevState => prevState + 1)
            console.log(progressValue)
        }
        return
    }

    const validationsSchema = yup.object().shape({
        email: yup.string().email('Введите корректный email').required('Обязательноe поле'),
        password: yup.string().matches(
            // /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]/,
            /[0-9a-zA-Z!@#$%^&*]/,
            'Недопустимые символы для пароля'
        ).min(6, 'Пароль должен быть не менее 6 символов').max(12, 'Максимальная длина пароля 12 символов').typeError('Должно быть строкой').required('Обязательноe поле'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательноe поле'),
        name: yup.string().min(1, 'Минимальная длина имени 1 символ').typeError('Должно быть строкой').required('Обязательноe поле'),
    })
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
                name: '',
            }}
            validateOnBlur
            validateOnChange={false}
            onSubmit={({ email, password, name }, { resetForm }) => {
                dispatch(operations.registration({ email, password, name }))
                resetForm();
            }}
            validationSchema={validationsSchema}
        >
            {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isValid, dirty }) => (
                <div className="form-block">
                    <div className="form-container">
                        <span className="logo"></span>
                        <form
                            className="auth-form"
                            onSubmit={handleSubmit}>
                            <label className="form-label" type="email">
                                <input
                                    className="form-input input-js-email"
                                    placeholder="E-mail"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    onBlur={e => { handleBlur(e); progressUp() }}
                                />
                                {touched.email && errors.email && <p className={'input-error'}>{errors.email}</p>}
                            </label>
                            <label className="form-label" type="password">
                                <input
                                    className="form-input"
                                    placeholder="Пароль"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={e => { handleBlur(e); progressUp() }}
                                />
                                {touched.password && errors.password && <p className={'input-error'}>{errors.password}</p>}
                            </label>
                            <label className="form-label" type="password">
                                <input
                                    className="form-input"
                                    placeholder="Подтвердите пароль"
                                    type="password"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={e => {
                                        handleBlur(e);
                                        progressUp();

                                    }}
                                    value={values.confirmPassword}
                                />
                                {touched.confirmPassword && errors.confirmPassword && <p className={'input-error'}>{errors.confirmPassword}</p>}
                            </label>
                            {/* <progress value={progressValue} max={4}></progress> */}
                            <ProgressBar className="progress-bar" completed={progressValue} maxCompleted={4} isLabelVisible={false} height={"4px"} margin={'0 0 28px 0'} bgColor={'#24cca7'} baseBgColor={'#e5f1ef'} />
                            <label className="form-label" type="text">
                                <input
                                    className="form-input"
                                    placeholder="Ваше имя"
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    value={values.name}
                                    onBlur={e => {
                                        handleBlur(e);
                                        progressUp();

                                    }}
                                />
                                {touched.name && errors.name && <p className={'input-error'}>{errors.name}</p>}
                            </label>
                            <button className="login-button" type="submit">Регистрация</button>
                            <NavLink
                                className="nav-button"
                                to="/fin-project-front/login"
                            // exact
                            >
                                Вход
                            </NavLink>
                        </form>
                    </div>
                </div>
            )}
        </Formik>
    )
}