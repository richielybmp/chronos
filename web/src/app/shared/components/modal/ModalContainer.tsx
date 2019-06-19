import React, { useState, useEffect } from 'react'
import { Modal } from 'semantic-ui-react';
import { ReactNodeLike } from 'prop-types';

interface ModalProps {
    show: boolean
    children: ReactNodeLike
    toggle: () => void
}

function ModalContainer(props: ModalProps) {

    const { show, children, toggle } = props
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
                closeOnEscape={true}
                closeOnDimmerClick={true}
                onClose={() => close()}
            >
                {children}
            </Modal>
        )
    }

    return null
}

export default ModalContainer
