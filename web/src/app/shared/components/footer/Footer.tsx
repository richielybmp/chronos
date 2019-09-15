import React from 'react'
import { Segment, Container, Grid, Header, List, Divider } from 'semantic-ui-react'

const background_image = {
    backgroundImage: '-webkit-radial-gradient(50% top, circle, rgba(84,90,182,0.6) 0%, rgba(84,90,182,0) 75%),-webkit-radial-gradient(right top, circle, #794aa2 0%, rgba(121,74,162,0) 57%)',
    margin: '5em 0em 0em',
    padding: '5em 0em'
}

export const Footer = () => {
    return (
        <Segment inverted vertical style={background_image}>
            <Container textAlign='center'>
                <Grid divided inverted stackable>
                    <Grid.Column width={7}>
                        <Header inverted as='h4' content='Group XPTO' />
                        <List link inverted>
                            <List.Item>
                                <a href="https://github.com/devfilsk" target="_blank" rel="noopener noreferrer">
                                    Filipe Maciel
                                </a>
                            </List.Item>
                            <List.Item>
                                <a href="https://github.com/mstedler" target="_blank" rel="noopener noreferrer">
                                    Mateus Stedler
                                </a>
                            </List.Item>
                            <List.Item>
                                <a href="https://github.com/richielybmp" target="_blank" rel="noopener noreferrer">
                                    Richiely Paiva
                                </a>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header inverted as='h4' content='UFG - Especialização em Desenvolvimento Web e Mobile - Full Stack' />
                        <List link inverted>
                            <List.Item>
                                Trabalho final da Especialização
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid>

                <Divider inverted section />
                <List horizontal inverted divided link size='small'>
                    <List.Item as='a' href='#'>
                        Site Map
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Contact Us
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Terms and Conditions
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Privacy Policy
                    </List.Item>
                </List>
            </Container>
        </Segment>
    )
}