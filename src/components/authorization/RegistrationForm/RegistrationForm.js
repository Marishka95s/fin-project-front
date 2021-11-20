import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
import operations from '../../../redux/auth/auth-operations';
import '../authForm.scss'


export default function RegistrationForm() {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)

    const countUp = () => {
        setCount(prevState => prevState + 1)
        console.log(count)
    }
    // useEffect(() => {
    //     console.log(count)
    // }, [count]);
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
                                    className="form-input"
                                    placeholder="E-mail"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </label>
                            {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
                            <label className="form-label" type="password">
                                <input
                                    className="form-input"
                                    placeholder="Пароль"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </label>
                            {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
                            <label className="form-label" type="password">
                                <input
                                    className="form-input"
                                    placeholder="Подтвердите пароль"
                                    type="password"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                />
                            </label>
                            {touched.confirmPassword && errors.confirmPassword && <p className={'error'}>{errors.confirmPassword}</p>}
                            <progress value="1" max="4"></progress>
                            <label className="form-label" type="text">
                                <input
                                    className="form-input"
                                    placeholder="Ваше имя"
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </label>
                            {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}
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