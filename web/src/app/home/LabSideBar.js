import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

const HorizontalSidebar = ({ animation, direction, visible }) => (
    <Sidebar as={Segment} animation={animation} direction={direction} visible={visible}>
        <Grid textAlign='center'>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Header as='h3'>New Content Awaits</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid columns={3} divided>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                </Grid.Column>
            </Grid>
        </Grid>
    </Sidebar>
)

HorizontalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
}

const VerticalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='thin'
    >
        <Menu.Item as='a'>
            <Icon name='home' />
            Home
    </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
    </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
    </Menu.Item>
    </Sidebar>
)

VerticalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
}

export default class SidebarExampleTransitions extends Component {
    state = {
        animation: 'side along',
        direction: 'left',
        dimmed: false,
        visible: true,
    }


    handleAnimationChange = animation => () =>
        this.setState(prevState => ({ animation, visible: !prevState.visible }))

    render() {
        const { animation, dimmed, direction, visible } = this.state
        const vertical = direction === 'bottom' || direction === 'top'
        const { children } = this.props

        return (
            <div>

                <Button disabled={vertical} onClick={this.handleAnimationChange('slide along')}>
                    |||
                </Button>

                <Sidebar.Pushable as={Segment}>
                    {vertical ? (
                        <HorizontalSidebar animation={animation} direction={direction} visible={visible} />
                    ) : null}
                    {vertical ? null : (
                        <VerticalSidebar animation={animation} direction={direction} visible={visible} />
                    )}

                    <Sidebar.Pusher dimmed={dimmed && visible}>
                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}