import { ReactNodeLike } from "prop-types";
import { Cronograma } from "chronos-core";
import React, { useState } from "react";
import { Responsive, Sidebar, Menu, Segment, Icon } from "semantic-ui-react";
import Utils from "../../../utils/utils";
import { Link } from "react-router-dom";

const background_image = {
    // backgroundImage: '-webkit-radial-gradient(50% top, circle, rgba(84,90,182,0.6) 0%, rgba(84,90,182,0) 75%),-webkit-radial-gradient(right top, circle, #794aa2 0%, rgba(121,74,162,0) 57%)'
    backgroundColor: '#4d417f'
    , borderRadius: '0'
}

const larguraTablet = Responsive.onlyTablet.minWidth

interface ResponsiveContainerProps {
    children: ReactNodeLike
    , userName: string
    , cronogramas: Cronograma[]
    , onSairClick: () => void
    , setOnDetail: (id: string) => void
}

export const MobileNav = ({ children, onSairClick, userName }: ResponsiveContainerProps) => {

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
                <Menu.Item content="Relatórios" active={activeItem === 'relatorios'} as={Link} to={'/cronogramas/relatorios'} />
                <Menu.Item content="Minha conta" active={activeItem === 'profile'} as={Link} to={'/cronogramas/profile'} />
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