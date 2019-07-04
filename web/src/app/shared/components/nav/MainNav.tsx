import React, { useState } from 'react'
import { ReactNodeLike } from 'prop-types';
import { Responsive, Segment, Menu, Sidebar, Icon } from 'semantic-ui-react';
import Utils from '../../../utils/utils';
import { Link, Redirect } from 'react-router-dom';
import { logout } from 'chronos-core';

const background_image = {
    backgroundImage: '-webkit-radial-gradient(50% top, circle, rgba(84,90,182,0.6) 0%, rgba(84,90,182,0) 75%),-webkit-radial-gradient(right top, circle, #794aa2 0%, rgba(121,74,162,0) 57%)',
    borderRadius: '0'
}

interface ResponsiveContainerProps {
    children: ReactNodeLike
}

const larguraTablet = Responsive.onlyTablet.minWidth

const handleSair = () => {
    logout()
}

export const DesktopNav = ({ children }: ResponsiveContainerProps) => {

    const [activeItem, setactiveItem] = useState('meus-cronogramas')
    const handleItemClick = (name: string) => setactiveItem(name)

    return (
        <Responsive getWidth={() => Utils.getScreenWidth(larguraTablet)} minWidth={larguraTablet}>
            <Segment inverted style={background_image}>
                <Menu size='large' inverted secondary>
                    {/* <Menu.Menu>
                        <Menu.Item>
                            <img src='https://react.semantic-ui.com/logo.png' />
                        </Menu.Item>
                    </Menu.Menu> */}
                    <Menu.Item
                        content="Meus cronogramas"
                        active={activeItem === 'meus-cronogramas'}
                        onClick={() => handleItemClick('meus-cronogramas')}
                        as={Link} to={`/cronogramas`} />
                    <Menu.Item content="Relatórios" active={activeItem === 'relatorios'} onClick={() => handleItemClick('relatorios')} />
                    <Menu.Menu position='right'>
                        <Menu.Item content="Minha conta" active={activeItem === 'profile'} onClick={() => handleItemClick('profile')} />
                        <Menu.Item content="Sair" active={activeItem === 'sair'} onClick={() => handleSair()} as={Link} to={'/'}
                        />
                    </Menu.Menu>
                </Menu>
            </Segment>
            {children}
        </Responsive>
    )
}

export const MobileNav = ({ children }: ResponsiveContainerProps) => {

    const [sideBarOpened, setsideBarOpened] = useState(false)

    const [activeItem, setactiveItem] = useState('meus-cronogramas')

    const handleItemClick = (name: string) => {
        setactiveItem(name)
        setsideBarOpened(false)
    }

    const handleSidebarHide = () => setsideBarOpened(false)

    const handleToggle = () => setsideBarOpened(true)

    return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={() => Utils.getScreenWidth(larguraTablet)}
            maxWidth={larguraTablet}
        >
            <Sidebar
                as={Menu}
                direction='right'
                animation='push'
                inverted
                onHide={() => handleSidebarHide()}
                vertical
                visible={sideBarOpened}
                style={background_image}
            >
                <Menu.Item
                    content="Meus cronogramas"
                    active={activeItem === 'meus-cronogramas'}
                    onClick={() => handleItemClick('meus-cronogramas')}
                    as={Link} to={`/cronogramas`} />
                <Menu.Item content="Relatórios" active={activeItem === 'relatorios'} onClick={() => handleItemClick('relatorios')} />
                <Menu.Item content="Minha conta" active={activeItem === 'profile'} onClick={() => handleItemClick('profile')} />
                <Menu.Item content="Sair" active={activeItem === 'sair'} onClick={() => handleSair()} as={Link} to={'/'} />
            </Sidebar>

            <Sidebar.Pusher dimmed={sideBarOpened}>
                <Segment inverted style={background_image}>
                    <Menu secondary inverted size='large'>
                        <Menu.Item>
                            <img src='https://react.semantic-ui.com/logo.png' alt='logo' />
                        </Menu.Item>
                        <Menu.Item position='right' onClick={() => handleToggle()}>
                            <Icon name='sidebar' />
                        </Menu.Item>
                        {/* menu itens */}

                        {/* <Menu.Item position='right'>
                            <img src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                        </Menu.Item> */}
                    </Menu>
                </Segment>
                {children}
            </Sidebar.Pusher>
        </Responsive >
    )
}

export const MainNav = ({ children }: ResponsiveContainerProps) => {
    return (
        <div>
            <DesktopNav>{children}</DesktopNav>
            <MobileNav>{children}</MobileNav>
        </div>
    )
}