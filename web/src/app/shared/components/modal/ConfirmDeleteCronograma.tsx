import React, { useState, useEffect } from 'react'
import { Modal, Confirm } from 'semantic-ui-react';

interface ModalProps {
    show: boolean,
    toggle: () => void,
    confirmDelete: () => void
}

export function ConfirmDeleteCronograma(props: ModalProps) {

    const { show, toggle, confirmDelete } = props;
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
            <Confirm
                open={modalShow}
                content='Deseja realmente excluir o cronograma?'
                cancelButton='Cancelar'
                confirmButton="Excluir"
                onCancel={() => close()}
                onConfirm={() => confirmDelete()}
            />
        )
    }

    return null
}