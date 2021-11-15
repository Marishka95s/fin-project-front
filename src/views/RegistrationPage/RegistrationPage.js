import Media from 'react-media';
import RegistrationForm from '../../components/authorization/RegistrationForm/RegistrationForm'


export default function RegistrationView() {

    return (
        <>
            <Media query="(max-width: 767px)" render={() =>
            (
                <RegistrationForm />
            )}
            />
            <Media query="(min-width: 768px) and (max-width: 1279px)" render={() =>
            (
                <div className="auth-block">
                    <div className="side-block">
                        <div className="auth-image reg-image"></div>
                        <p className="app-name">Finance App</p>
                    </div>
                    <RegistrationForm />
                </div>
            )}
            />
            <Media query="(min-width: 1280px)" render={() =>
            (
                <div className="auth-block">
                    <div className="side-block reg-block">
                        <div className="auth-image reg-image"></div>
                        <p className="app-name">Finance App</p>
                    </div>
                    <div className="form-blur reg-blur">
                        <RegistrationForm />
                    </div>
                </div>
            )}
            />
        </>


    );
};