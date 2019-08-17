import React, { useState } from "react";
import { Responsive, Segment, Menu, Dropdown } from "semantic-ui-react";
import Utils from "../../../utils/utils";
import { Link } from "react-router-dom";
import { Cronograma } from "chronos-core";
import { ReactNodeLike } from "prop-types";

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

export const DesktopNav = ({ children, onSairClick, setOnDetail, cronogramas, userName }: ResponsiveContainerProps) => {

    const [activeItem, setactiveItem] = useState('chronos')
    const handleItemClick = (name: string) => setactiveItem(name)

    //Contexto para obter o userName
    // const context = useContext(ChronosContext);
    // if (context.getState().auth.user != null)
    // userName = context.getState().auth.user.user.name;

    return (
        <Responsive getWidth={() => Utils.getScreenWidth(larguraTablet)} minWidth={larguraTablet}>
            <Segment inverted style={background_image}>
                <Menu size='large' inverted secondary>
                    <Menu.Item
                        content="Chronos"
                        active={activeItem === 'chronos'}
                        onClick={() => handleItemClick('chronos')}
                        as={Link} to={`/cronogramas`} />

                    <Dropdown item text='Meus cronogramas'>
                        <Dropdown.Menu>
                            {cronogramas.length > 0 &&
                                cronogramas.map((c: Cronograma, index: number) => {
                                    return (
                                        <Dropdown.Item
                                            key={index}
                                            as={Link}
                                            to={`${process.env.PUBLIC_URL}/cronogramas/${c.uuid}`}
                                            onClick={() => setOnDetail(c.uuid)}
                                        >{c.titulo}</Dropdown.Item>
                                    )
                                })
                            }
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item content="Relatórios" active={activeItem === 'relatorios'} as={Link} to={'/cronogramas/relatorios'} />
                    <Menu.Menu position='right'>
                        <Menu.Item content={`Bem vindo, ${userName}`} active={false} />
                        <Menu.Item content="Minha conta" active={activeItem === 'profile'} as={Link} to={'/cronogramas/profile'} />
                        <Menu.Item content="Sair" active={activeItem === 'sair'} onClick={() => onSairClick()} />
                    </Menu.Menu>
                </Menu>
            </Segment>
            {children}
        </Responsive>
    )
}