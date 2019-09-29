import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Form, Message, Icon } from 'semantic-ui-react';
import '../../../style/css/main.css';
import '../../../style/css/util.css';

interface SignInFormProps {
    error: any,
    actionLogin: (email: string, password: string) => void,
}

export default function SignInForm(props: SignInFormProps) {

    const { error, actionLogin } = props;

    const [email, setEmail] = useState("");
    const [emailHasValue, setEmailHasValue] = useState("");
    const [emailError, setEmailError] = useState('')

    const [password, setPassword] = useState("");
    const [passwordHasValue, setPasswordHasValue] = useState("");
    const [passwordError, setPasswordError] = useState('')

    function handleEmailChange(value: string) {
        setEmailError("")
        setEmail(value)
        setEmailHasValue(value !== "" ? "has-val" : "")
    }

    function handlePasswordChange(value: string) {
        setPasswordError("")
        setPassword(value)
        setPasswordHasValue(value !== "" ? "has-val" : "")
    }

    function handleSubmit() {
        if (!validate()) {
            actionLogin(email, password);
        }
    }

    function validate() {
        let inconsistente = false;
        setEmailError('');
        setPasswordError('');

        const regex_mail = new RegExp('[a-zA-Z0-9!#$%&amp;\'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*')
        if (!regex_mail.test(email)) {
            setEmailError('Por favor, entre com um endereço de email no formato correto.');
            inconsistente = true
        }

        if (password.length <= 5) {
            setPasswordError('A senha deve possuir 6 ou mais caracteres.');
            inconsistente = true
        }

        return inconsistente
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">

                    <Form className="login100-form validate-form" onSubmit={() => handleSubmit()} style={{ paddingTop: '120px', autoComplete: "new-off" }}>
                        <span className="login100-form-title p-b-43">
                            Login
    					</span>

                        <div className={`wrap-input100 validate-input ${emailError !== "" && "alert-validate"}`} data-validate={emailError}>
                            <input
                                className={`input100 ${emailHasValue}`}
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => handleEmailChange(e.target.value)}>
                            </input>
                            <span className="focus-input100"></span>
                            <span className="label-input100">E-mail</span>
                        </div>

                        <div className={`wrap-input100 validate-input ${passwordError !== "" && "alert-validate"}`} data-validate={passwordError}>
                            <input
                                className={`input100 ${passwordHasValue}`}
                                type="password"
                                name="pass"
                                value={password}
                                onChange={(e) => handlePasswordChange(e.target.value)}>
                            </input>
                            <span className="focus-input100"></span>
                            <span className="label-input100">Senha</span>
                        </div>

                        <div className="text-center p-t-3 p-b-32">
                            <span className="txt2">
                                Esqueceu a senha?
						    </span>
                            <div>
                                <Link className="txt1" to={`${process.env.PUBLIC_URL}/recuperar-senha`}>
                                    Recuperar
							    </Link>
                            </div>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Login
						    </button>
                        </div>

                        {error &&
                            <Message warning style={{ display: "block" }}>
                                <Icon name='user x' />
                                {error}
                            </Message>
                        }

                        <div className="text-center p-t-46 p-b-20">
                            <span className="txt2">
                                Ainda não possui conta?
						    </span>
                            <div>
                                <Link className="txt1" to={`${process.env.PUBLIC_URL}/cadastrar`}>
                                    Criar conta
							    </Link>
                            </div>
                        </div>
                    </Form>

                    <div className="login100-more"></div>
                </div>
            </div>
        </div>
    )
}
