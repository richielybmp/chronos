import React, { Component } from 'react'
import { Responsive, Visibility, Segment, Menu, Container, Button } from 'semantic-ui-react';
import HomePageHeading from './HomePageHeading';
import { Link } from 'react-router-dom';

const getScreenWidth = (): any => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
    state: any = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive getWidth={getScreenWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : undefined}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>
                                    CHRONOS
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button
                                        as={Link}
                                        to={`${process.env.PUBLIC_URL}/entrar`}
                                        inverted={!fixed}>
                                        Entrar
                                    </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Cadastrar
                                     </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomePageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

export default DesktopContainer



