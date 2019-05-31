import React from 'react'
import { Menu, Button, Container, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Header = () => {
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
                        {/* futuramente o link irá mudar para a página de login e o login redireciona para o /cronograma */}
                        <Menu.Item >
                            <Button basic inverted
                                as={Link}
                                to={`${process.env.PUBLIC_URL}/entrar`}
                            >
                                Entrar
                            </Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </>
    )
}

export default Header
