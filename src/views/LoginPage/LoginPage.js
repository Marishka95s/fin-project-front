import Media from 'react-media';
import LoginForm from '../../components/authorization/LoginForm/LoginForm'


export default function RegistrationView() {

    return (
        <>
            <Media query="(max-width: 767px)" render={() =>
            (
                <LoginForm />
            )}
            />
            <Media query="(min-width: 768px) and (max-width: 1279px)" render={() =>
            (
                <div className="auth-block">
                    <div className="side-block">
                        <div className="auth-image login-image"></div>
                        <p className="app-name">Finance App</p>
                    </div>
                    <LoginForm />
                </div>

            )}
            />
            <Media query="(min-width: 1280px)" render={() =>
            (
                <div className="auth-block">
                    <div className="side-block login-block">
                        <div className="auth-image login-image"></div>
                        <p className="app-name">Finance App</p>
                    </div>
                    <div className="form-blur login-blur">
                        <LoginForm />
                    </div>
                </div>
            )}
            />
        </>
    );
};