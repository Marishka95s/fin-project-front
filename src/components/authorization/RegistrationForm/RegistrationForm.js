import { useState } from 'react';
import '../authForm.scss'
import { NavLink } from 'react-router-dom'

export default function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            case 'confirmPassword':
                return setConfirmPassword(value);
            case 'name':
                return setName(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch(operations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('')
    };
    return (
        <div className="form-block">
            <div className="container">
                <span className="logo"></span>
                <form
                    className="auth-form"
                    onSubmit={handleSubmit}>
                    <label className="form-label">
                        <input
                            className="form-input"
                            placeholder="E-mail"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form-label">
                        <input
                            className="form-input"
                            placeholder="Пароль"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="form-label">
                        <input
                            className="form-input"
                            placeholder="Подтвердите пароль"
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                        />
                    </label>
                    <progress value="1" max="4"></progress>
                    <label className="form-label" >
                        <input
                            className="form-input"
                            placeholder="Ваше имя"
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </label>
                    <button className="login-button" type="submit">Регистрация</button>
                    <NavLink
                        className="nav-button"
                        to="/fin-project-front/login"
                        exact
                    >
                        Вход
                    </NavLink>
                </form>
            </div>
        </div>
    )

}