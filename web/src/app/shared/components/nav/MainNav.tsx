import React, { useState, useContext } from 'react'
import { ReactNodeLike } from 'prop-types';
import { Responsive, Segment, Menu, Sidebar, Icon } from 'semantic-ui-react';
import Utils from '../../../utils/utils';
import { Link } from 'react-router-dom';
import { LoaderComponent } from '..';
import { ChronosContext } from '../../../../ChronosRoutes';

const background_image = {
    backgroundImage: '-webkit-radial-gradient(50% top, circle, rgba(84,90,182,0.6) 0%, rgba(84,90,182,0) 75%),-webkit-radial-gradient(right top, circle, #794aa2 0%, rgba(121,74,162,0) 57%)'
    , borderRadius: '0'
}

interface ResponsiveContainerProps {
    children: ReactNodeLike
    , onSairClick: () => void
}

const larguraTablet = Responsive.onlyTablet.minWidth

export const DesktopNav = ({ children, onSairClick }: ResponsiveContainerProps) => {

    const [activeItem, setactiveItem] = useState('meus-cronogramas')
    const handleItemClick = (name: string) => setactiveItem(name)

    //Contexto para obter o userName
    const context = useContext(ChronosContext);
    var userName = ''
    if (context.getState().auth.user != null)
        userName = context.getState().auth.user.user.name;

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

                        <Menu.Item content={`Bem vindo, ${userName}`} active={false} />


                        <Menu.Item content="Minha conta" active={activeItem === 'profile'} onClick={() => handleItemClick('profile')} />
                        <Menu.Item content="Sair" active={activeItem === 'sair'} onClick={() => onSairClick()} />

                    </Menu.Menu>
                </Menu>
            </Segment>
            {children}
        </Responsive>
    )
}

export const MobileNav = ({ children, onSairClick }: ResponsiveContainerProps) => {

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
                <Menu.Item content="Sair" active={activeItem === 'sair'} onClick={() => onSairClick()} />
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

interface MainNavProps {
    logOut: (callback: Function) => void,
    children: ReactNodeLike
}

export function MainNav({ logOut, children }: MainNavProps) {

    const [isLoading, setIsLoading] = useState(false)

    const handleLogOut = () => {
        setIsLoading(true)

        logOut(() => {
            window.location.href = '/'
        })
    }

    return (
        <>
            {isLoading ? (
                <LoaderComponent tamanho='big' titulo="Carregando" />
            ) : null}
            <div>
                <DesktopNav onSairClick={handleLogOut}>{children}</DesktopNav>
                <MobileNav onSairClick={handleLogOut}>{children}</MobileNav>
            </div>
        </>
    )
}