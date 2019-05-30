import React, { useState } from 'react'
import { Menu, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [activeItem, setActiveItem] = useState('cronograma')

    const handleItemClick = (name: string) => {
        setActiveItem(name)
    }

    return (
        <Segment inverted>
            <Menu inverted pointing secondary>
                <Menu.Item
                    as={Link}
                    to={`${process.env.PUBLIC_URL}/`}
                    name='chronos'
                    active={activeItem === 'Chronos'}
                    onClick={() => handleItemClick('Chronos')} />
                <Menu.Item
                    name='cronogramas'
                    active={activeItem === 'cronogramas'}
                    onClick={() => handleItemClick('cronogramas')}
                />
                <Menu.Menu position='right'>
                    {/* futuramente o link irá mudar para a página de login e o login redireciona para o /cronograma */}
                    <Button basic inverted
                        as={Link}
                        to={`${process.env.PUBLIC_URL}/cronograma`}
                    >
                        Entrar
                    </Button>
                    <Button basic inverted>
                        Cadastrar
                    </Button>
                </Menu.Menu>
            </Menu>
        </Segment>

    )
}

export default Header
