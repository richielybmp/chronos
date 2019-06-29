import React, { Component } from 'react'
import { Responsive, Visibility, Segment, Menu, Container, Button } from 'semantic-ui-react';
import HomePageHeading from './HomePageHeading';
import { Link } from 'react-router-dom';
import Utils from '../../../utils/utils'

const background_image = {
    backgroundImage: '-webkit-radial-gradient(50% top, circle, rgba(84,90,182,0.6) 0%, rgba(84,90,182,0) 75%),-webkit-radial-gradient(right top, circle, #794aa2 0%, rgba(121,74,162,0) 57%)',
    minHeight: 700,
    padding: '1em 0em'
}

const larguraTablet = Responsive.onlyTablet.minWidth

class DesktopContainer extends Component {
    state: any = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive getWidth={() => Utils.getScreenWidth(larguraTablet)} minWidth={larguraTablet}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        vertical
                        style={background_image}
                    >
                        <Menu
                            fixed={fixed ? 'top' : undefined}
                            inverted={!fixed}
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



