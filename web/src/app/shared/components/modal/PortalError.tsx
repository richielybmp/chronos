import React from 'react'
import { Portal, Segment, Header, Button } from 'semantic-ui-react';

interface MyProps {
    error: string,
    handleErrorClose: () => void
}

export function PortalError(props: MyProps) {

    const { error, handleErrorClose } = props
    return (
        <div>
            {
                error ?
                    <Portal onClose={() => handleErrorClose()} open={error != null}>
                        <Segment color='red'
                            style={{
                                position: " fixed",
                                top: " 50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: 1000,
                            }}
                        >
                            <Header>Erro</Header>
                            <p>{error}</p>

                            <Button content='Fechar' negative onClick={() => handleErrorClose()} />
                        </Segment>
                    </Portal >
                    : null
            }
        </div>
    )
}
