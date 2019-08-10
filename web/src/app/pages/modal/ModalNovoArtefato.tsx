import React from 'react'
import { ModalContainer } from '../../shared/components';
import NewArtefatoFormContainer from '../../containers/NewArtefatoFormContainer';

interface ModalNovoArtefatoProps {
    show: boolean
    idOnDetail: string
    toggle: () => void
    close: () => void
}

function ModalNovoArtefato(props: ModalNovoArtefatoProps) {

    const { show, toggle, close, idOnDetail } = props

    return (
        <div>
            <ModalContainer show={show} toggle={toggle} >
                <NewArtefatoFormContainer close={close} idOnDetail={idOnDetail} />
            </ModalContainer>
        </div>
    )
}

export default ModalNovoArtefato
