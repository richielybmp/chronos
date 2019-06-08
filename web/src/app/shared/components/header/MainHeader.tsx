import React from 'react'
import { Menu, Container, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
    return (
        <>
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item header
                        as={Link}
                        to={`${process.env.PUBLIC_URL}/`}
                    >
                        <Image size='mini' src='https://react.semantic-ui.com/logo.png' style={{ marginRight: '1.5em' }} />
                        Chronos
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item >
                            <Header as='h2'>
                                <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                            </Header>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </>
    )
}

export default MainHeader
