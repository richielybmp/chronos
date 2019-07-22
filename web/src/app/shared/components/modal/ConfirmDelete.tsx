import React, { useState, useEffect } from 'react'
import { Modal, Header, Button, Icon } from 'semantic-ui-react';

interface ModalProps {
    show: boolean,
    pergunta: string
    toggle: () => void,
    confirmDelete: () => void
}

export function ConfirmDelete(props: ModalProps) {

    const { show, toggle, confirmDelete, pergunta } = props;
    const [modalShow, setmodalShowToggle] = useState(show)

    useEffect(() => {
        setmodalShowToggle(show);
    }, [props.show])

    const close = () => {
        setmodalShowToggle(!modalShow)
        toggle()
    }

    if (modalShow) {
        return (
            <Modal
                open={modalShow}
                onClose={() => close()}
                size='small'
            >
                <Header icon='browser' content='Excluir cronograma' />
                <Modal.Content>
                    <h3>{pergunta}</h3>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => close()} >
                        <Icon name='x' /> Cancelar
                    </Button>
                    <Button color='red' onClick={() => confirmDelete()} >
                        <Icon name='trash' /> EXCLUIR
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }

    return null
}