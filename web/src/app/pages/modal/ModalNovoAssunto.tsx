import React from 'react'
import { ModalContainer } from '../../shared/components';
import NewAssuntoFormContainer from '../../containers/NewAssuntoFormContainer';

interface ModalNovoAssuntoProps {
    history: any
    show: boolean
    idDisciplina: string
    toggle: () => void
    close: () => void
}

function ModalNovoAssunto(props: ModalNovoAssuntoProps) {

    const { history, show, toggle, close, idDisciplina } = props

    return (
        <div>
            <ModalContainer show={show} toggle={toggle} >
                <NewAssuntoFormContainer history={history} close={close} idDisciplina={idDisciplina} />
            </ModalContainer>
        </div>
    )
}

export default ModalNovoAssunto
