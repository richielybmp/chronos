import React, { useState } from 'react'
import '../../../style/css/main.css';
import '../../../style/css/util.css';
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';

interface RecoverPasswordFormProps {
    error: any,
    actionRecoverPassword: (email: string, password: string) => void,
}

export default function RecoverPasswordForm(props: RecoverPasswordFormProps) {

    const { error, actionRecoverPassword } = props;

    const [email, setEmail] = useState("");
    const [emailHasValue, setEmailHasValue] = useState("");
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState("");
    const [passwordHasValue, setPasswordHasValue] = useState("");
    const [passwordError, setPasswordError] = useState('');

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordHasValue, setConfirmPasswordHasValue] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    function handleEmailChange(value: string) {
        setEmailError("");
        setEmail(value);
        setEmailHasValue(value != "" ? "has-val" : "");
    }

    function handlePasswordChange(value: string) {
        setPasswordError("");
        setPassword(value);
        setPasswordHasValue(value != "" ? "has-val" : "");
    }

    function handleConfirmPasswordChange(value: string) {
        setConfirmPasswordError("");
        setConfirmPassword(value);
        setConfirmPasswordHasValue(value != "" ? "has-val" : "");
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if (!validate()) {
            actionRecoverPassword(email, password);
        }
    }

    function validate() {
        let inconsistente = false;

        setEmailError('');
        setPasswordError('');

        const regex_mail = new RegExp('[a-zA-Z0-9!#$%&amp;\'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*')
        if (!regex_mail.test(email)) {
            setEmailError('Por favor, entre com um endereço de email no formato correto.');
            inconsistente = true;
        }

        if (password.length <= 5) {
            setPasswordError('A senha deve possuir 6 ou mais caracteres.');
            inconsistente = true;
        }

        if (confirmPassword.length <= 5) {
            setConfirmPasswordError('A senha deve possuir 6 ou mais caracteres.');
            inconsistente = true
        }
        else if (confirmPassword != password) {
            setConfirmPasswordError('As senhas não são iguais.');
            inconsistente = true
        }

        return inconsistente
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">

                    <Form className="login100-form validate-form" style={{ paddingTop: '115px', autoComplete: "off" }} onSubmit={(e) => handleSubmit(e)}>
                        <span className="login100-form-title p-b-43">
                            Recuperar senha
    					</span>

                        <div className={`wrap-input100 validate-input ${emailError != "" && "alert-validate"}`} data-validate={emailError}>
                            <input className={`input100 ${emailHasValue}`} type="text" name="email" value={email} onChange={(e) => handleEmailChange(e.target.value)}></input>
                            <span className="focus-input100"></span>
                            <span className="label-input100">E-mail</span>
                        </div>

                        <div className={`wrap-input100 validate-input ${passwordError != "" && "alert-validate"}`} data-validate={passwordError}>
                            <input className={`input100 ${passwordHasValue}`} type="password" name="pass" value={password} onChange={(e) => handlePasswordChange(e.target.value)}></input>
                            <span className="focus-input100"></span>
                            <span className="label-input100">Senha</span>
                        </div>

                        <div className={`wrap-input100 validate-input ${confirmPasswordError != "" && "alert-validate"}`} data-validate={confirmPasswordError}>
                            <input className={`input100 ${confirmPasswordHasValue}`} type="password" name="pass" value={confirmPassword} onChange={(e) => handleConfirmPasswordChange(e.target.value)}></input>
                            <span className="focus-input100"></span>
                            <span className="label-input100">Confirme a senha</span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Recuperar
						    </button>
                        </div>

                        <div className="text-center p-t-46 p-b-20">
                            <span className="txt2">
                                Já possui possui conta?
						    </span>
                            <div>
                                <Link className="txt1" to={`${process.env.PUBLIC_URL}/entrar`}>
                                    Entrar
							    </Link>
                            </div>
                            <span className="txt2">
                                Ainda não possui conta?
						    </span>
                            <div>
                                <Link className="txt1" to={`${process.env.PUBLIC_URL}/cadastrar`}>
                                    Sign up
							    </Link>
                            </div>
                        </div>
                    </Form>

                    <div className="login100-more3">
                    </div>
                </div>
            </div>
        </div>
    )
}
