import React from 'react'
import { ModalContainer } from '../../shared/components';
import NewArtefatoMaterialFormContainer from '../../containers/NewArtefatoMaterialFormContainer';

interface ModalNovoArtefatoProps {
    show: boolean
    idOnDetail: string
    toggle: () => void
    close: () => void
}

function ModalNovoArtefatoRevisao(props: ModalNovoArtefatoProps) {

    const { show, toggle, close, idOnDetail } = props

    return (
        <div>
            <ModalContainer show={show} toggle={toggle} >
                <NewArtefatoMaterialFormContainer close={close} idOnDetail={idOnDetail} />
            </ModalContainer>
        </div>
    )
}

export default ModalNovoArtefatoRevisao
