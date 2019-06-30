import React, { Component } from 'react'
import { Responsive, Segment, Menu, Container, Button, Sidebar } from 'semantic-ui-react';
import HomePageHeading from './HomePageHeading';
import { Link } from 'react-router-dom';
import Utils from '../../../utils/utils'

const background_image = {
    backgroundImage: '-webkit-radial-gradient(50% top, circle, rgba(84,90,182,0.6) 0%, rgba(84,90,182,0) 75%),-webkit-radial-gradient(right top, circle, #794aa2 0%, rgba(121,74,162,0) 57%)',
    minHeight: 350,
    padding: '1em 0em'
}

const larguraTablet = Responsive.onlyTablet.minWidth

class MobileContainer extends Component {
    state: any = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props

        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={() => Utils.getScreenWidth(larguraTablet)}
                maxWidth={larguraTablet}
            >
                <Segment
                    inverted
                    vertical
                    textAlign='center'
                    style={background_image}
                >
                    <Container>
                        <Menu inverted secondary size='large'>
                            <Menu.Item position='left'>
                                <Button
                                    as={Link}
                                    to={`${process.env.PUBLIC_URL}/entrar`}
                                    inverted>
                                    Entrar
                                    </Button>
                            </Menu.Item>
                            <Menu.Item position='right'>
                                <Button as={Link}
                                    to={`${process.env.PUBLIC_URL}/entrar`}
                                    inverted style={{ marginLeft: '0.5em' }}>
                                    Cadastrar
                                    </Button>
                            </Menu.Item>
                        </Menu>
                    </Container>
                    <HomePageHeading mobile />
                </Segment>
                {children}
            </Responsive >
        )
    }
}

export default MobileContainer