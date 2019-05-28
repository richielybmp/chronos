import React, { useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const Header = () => {
    const [activeItem, setActiveItem] = useState('cronograma')

    const handleItemClick = (name: string) => {
        setActiveItem(name)
    }

    return (
        <Segment inverted >
            <Menu inverted pointing secondary>
                <Menu.Item name='cronograma' active={activeItem === 'cronograma'} onClick={() => handleItemClick('cronograma')} />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={() => handleItemClick('messages')}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={() => handleItemClick('friends')}
                />
            </Menu>
        </Segment>

    )
}

export default Header
