
import React, { useState, useEffect } from 'react';
import { LoaderComponent } from '../../shared/components';
import RecoverPasswordForm from '../forms/RecoverPasswordForm';
import { Modal, Button } from 'semantic-ui-react';

interface Props {
    auth: any;
    match: any,
    history: any,
    recoverPassword: (email: string, callBack: Function) => void
    clearState: () => void
}

function RecoverPassword(props: Props) {

    const { loading, error } = props.auth;
    const [showMessage, setShowMessage] = useState(false);

    const handleRecuperar = (email: string) => {
        props.recoverPassword(email, () => {
            setShowMessage(true);
        })
    }

    useEffect(() => {
        props.clearState();
    }, [])

    if (loading) {
        return <LoaderComponent tamanho='big' titulo="Carregando" />
    }

    return (
        <>
            <RecoverPasswordForm error={error} actionRecoverPassword={handleRecuperar} />

            {showMessage &&
                <Modal closeIcon={true} size='tiny' open={showMessage} onClose={() => setShowMessage(false)}>
                    <Modal.Header>Recuperar senha</Modal.Header>
                    <Modal.Content>
                        <p>Enviamos um email para que você possa definir uma nova senha.</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content='Ok'
                            onClick={() => setShowMessage(false)}
                        />
                    </Modal.Actions>
                </Modal>
            }
        </>
    )
}

export default RecoverPassword