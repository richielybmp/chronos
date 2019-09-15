import React, { useState } from 'react';
import { LoaderComponent } from '../../shared/components';
import ConfirmPasswordForm from '../forms/ConfirmPasswordForm';
import { Modal, Button } from 'semantic-ui-react';

interface Props {
    auth: any;
    match: any,
    history: any,
    confirmPassword: (novaSenha: string, callBack: Function) => void,
    clearState: () => void
}

function ConfirmPassword(props: Props) {

    const { loading, error } = props.auth;
    const [showMessage, setShowMessage] = useState(false);

    const handleRecuperar = (novaSenha: string) => {
        props.confirmPassword(novaSenha, () => {
            setShowMessage(true);
        })
    }

    const handleOk = () => {
        setShowMessage(false);
        props.history.push(`${process.env.PUBLIC_URL}/entrar`);
    }

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    return (
        <>
            <ConfirmPasswordForm error={error} actionConfirmPassword={handleRecuperar} />

            {showMessage &&
                <Modal closeIcon={true} size='tiny' open={showMessage} onClose={() => setShowMessage(false)}>
                    <Modal.Header>Recuperar senha</Modal.Header>
                    <Modal.Content>
                        <p>Sua senha foi alterada com sucesso.</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Ok'
                            onClick={() => handleOk()}
                        />
                    </Modal.Actions>
                </Modal>
            }
        </>
    )
}

export default ConfirmPassword