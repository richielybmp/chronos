import React, { useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const Header = () => {
    const [activeItem, setActiveItem] = useState('cronograma')

    const handleItemClick = (name: string) => {
        setActiveItem(name)
    }

    return (
        <Segment inverted>
            <Menu inverted pointing secondary>
                <Menu.Item
                    name='chronos'
                    active={activeItem === 'Chronos'}
                    onClick={() => handleItemClick('Chronos')} />
                <Menu.Item
                    name='cronogramas'
                    active={activeItem === 'cronogramas'}
                    onClick={() => handleItemClick('cronogramas')}
                />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='entrar'
                        active={activeItem === 'entrar'}
                        onClick={() => handleItemClick('entrar')}
                    />
                </Menu.Menu>
            </Menu>
        </Segment>

    )
}

export default Header
