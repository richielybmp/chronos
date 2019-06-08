import React, { Component } from 'react'
import { Responsive, Segment, Menu, Container, Button, Sidebar, Icon } from 'semantic-ui-react';
import HomePageHeading from './HomePageHeading';
import { Link } from 'react-router-dom';
import Utils from '../utils/utils'

const larguraTablet = Responsive.onlyTablet.minWidth


class MobileContainer extends Component {
    state: any = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={() => Utils.getScreenWidth(larguraTablet)}
                maxWidth={larguraTablet}
            >
                <Sidebar
                    as={Menu}
                    animation='push'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as='a' active>
                        CHRONOS
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button
                                        as={Link}
                                        to={`${process.env.PUBLIC_URL}/entrar`}
                                        inverted>
                                        Entrar
                                    </Button>
                                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                        Cadastrar
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <HomePageHeading mobile />
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>
        )
    }
}

export default MobileContainer