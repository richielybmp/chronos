import React, { useState, useEffect } from 'react'
import { Modal, TransitionablePortal } from 'semantic-ui-react';
import { ReactNodeLike } from 'prop-types';

interface ModalProps {
    show: boolean
    children: ReactNodeLike
    toggle: () => void
}

export function ModalContainer(props: ModalProps) {

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
            <div>
                <style>
                    {`
                        .ui.dimmer {
                            transition: background-color 0.5s ease;
                            background-color: transparent;
                        }
                        .modal-fade-in .ui.dimmer {
                            background-color: rgba(0,0,0,.85);
                            transition: background-color 0.5s ease;
                        }
                    `}
                </style>
                <TransitionablePortal
                    open={modalShow}
                    onOpen={() => setTimeout(() => document.body.classList.add('modal-fade-in'), 0)}
                >
                    <Modal
                        open={modalShow}
                        closeOnEscape={true}
                        closeOnDimmerClick={true}
                        onClose={() => close()}
                        closeIcon
                        size='small'
                    >
                        {children}
                    </Modal>
                </TransitionablePortal>
            </div>
        )
    }

    return null
}