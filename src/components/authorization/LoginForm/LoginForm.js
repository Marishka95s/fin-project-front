import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'
import operations from '../../../redux/auth/auth-operations';
import '../authForm.scss'
export default function LoginForm() {
    const dispatch = useDispatch();
    const validationsSchema = yup.object().shape({
        email: yup.string().email('Введите корректный email').required('Обязательноe поле'),
        password: yup.string().matches(
            /[0-9a-zA-Z!@#$%^&*]/,
            'Недопустимые символы для пароля'
        ).min(6, 'Пароль должен быть не менее 6 символов').max(12, 'Максимальная длина пароля 12 символов').typeError('Должно быть строкой').required('Обязательноe поле'),
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
            onSubmit={({ email, password }, { resetForm }) => {
                dispatch(operations.login({ email, password }))
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
                            onSubmit={handleSubmit}
                        >
                            <label className="form-label" type="email">
                                <input
                                    className="form-input"
                                    placeholder="E-mail"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && <p className={'input-error'}>{errors.email}</p>}
                            </label>
                            <label className="form-label" type="password">
                                <input
                                    className="form-input"
                                    placeholder="Пароль"
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password && <p className={'input-error'}>{errors.password}</p>}
                            </label>
                            <button className="login-button" type="submit">Вход</button>
                            <NavLink
                                className="nav-button"
                                to="/fin-project-front/registration"
                            // exact
                            >
                                Регистрация
                            </NavLink>
                        </form>
                    </div>
                </div>
            )}
        </Formik>
    );
};