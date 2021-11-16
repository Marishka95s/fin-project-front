import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import '../authForm.scss'



export default function LoginForm() {
    // const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch(operations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (

        <div className="form-block">
            <div className="container">
                <span className="logo"></span>
                <form
                    className="auth-form"
                    onSubmit={handleSubmit}
                >
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
                    <button className="login-button" type="submit">Вход</button>
                    <NavLink
                        className="nav-button"
                        to="/fin-project-front/registration"
                        exact
                    >
                        Регистрация
                    </NavLink>
                </form>
            </div>
        </div>


    );
};