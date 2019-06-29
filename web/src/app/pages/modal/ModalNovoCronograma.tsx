import React from 'react'
import NewCronogramaFormContainer from '../../containers/NewCronogramaFormContainer';
import { ModalContainer } from '../../shared/components';

interface ModalNovoCronogramaProps {
    history: any
    show: boolean
    toggle: () => void
    close: () => void
}

function ModalNovoCronograma(props: ModalNovoCronogramaProps) {

    const { history, show, toggle, close } = props

    return (
        <div>
            <ModalContainer show={show} toggle={toggle} >
                <NewCronogramaFormContainer history={history} close={close} />
            </ModalContainer>
        </div>
    )
}

export default ModalNovoCronograma
