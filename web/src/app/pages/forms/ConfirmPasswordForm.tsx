import React, { useState } from 'react'
import '../../../style/css/main.css';
import '../../../style/css/util.css';
import { Link } from 'react-router-dom';
import { Form, Icon, Message } from 'semantic-ui-react';

interface ConfirmPasswordFormProps {
    error: any,
    actionConfirmPassword: (password: string) => void,
}

export default function ConfirmPasswordForm(props: ConfirmPasswordFormProps) {

    const { error, actionConfirmPassword } = props;

    const [password, setPassword] = useState("");
    const [passwordHasValue, setPasswordHasValue] = useState("");
    const [passwordError, setPasswordError] = useState('');

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordHasValue, setConfirmPasswordHasValue] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    function handlePasswordChange(value: string) {
        setPasswordError("");
        setPassword(value);
        setPasswordHasValue(value !== "" ? "has-val" : "");
    }

    function handleConfirmPasswordChange(value: string) {
        setConfirmPasswordError("");
        setConfirmPassword(value);
        setConfirmPasswordHasValue(value !== "" ? "has-val" : "");
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if (!validate()) {
            actionConfirmPassword(password);
        }
    }

    function validate() {
        let inconsistente = false;

        setPasswordError('');

        if (password.length <= 5) {
            setPasswordError('A senha deve possuir 6 ou mais caracteres.');
            inconsistente = true;
        }

        if (confirmPassword.length <= 5) {
            setConfirmPasswordError('A senha deve possuir 6 ou mais caracteres.');
            inconsistente = true;
        }
        else if (confirmPassword !== password) {
            setConfirmPasswordError('As senhas não são iguais.');
            inconsistente = true;
        }

        return inconsistente;
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">

                    <Form className="login100-form validate-form" style={{ paddingTop: '115px', autoComplete: "off" }} onSubmit={(e) => handleSubmit(e)}>
                        <span className="login100-form-title p-b-43">
                            Definição da nova senha
    					</span>

                        <div className={`wrap-input100 validate-input ${passwordError !== "" && "alert-validate"}`} data-validate={passwordError}>
                            <input className={`input100 ${passwordHasValue}`} type="password" name="pass" value={password} onChange={(e) => handlePasswordChange(e.target.value)}></input>
                            <span className="focus-input100"></span>
                            <span className="label-input100">Nova senha</span>
                        </div>

                        <div className={`wrap-input100 validate-input ${confirmPasswordError !== "" && "alert-validate"}`} data-validate={confirmPasswordError}>
                            <input className={`input100 ${confirmPasswordHasValue}`} type="password" name="pass" value={confirmPassword} onChange={(e) => handleConfirmPasswordChange(e.target.value)}></input>
                            <span className="focus-input100"></span>
                            <span className="label-input100">Confirme a senha</span>
                        </div>

                        {error &&
                            <Message warning style={{ display: "block" }}>
                                <Icon name='user x' />
                                {error}
                            </Message>
                        }

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

                    <div className="login100-more3" />
                </div>
            </div>
        </div>
    )
}
