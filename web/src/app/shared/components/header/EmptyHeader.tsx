import React from 'react'
import { Button, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface Props {
    icon: any,
    title: string,
    subtitle: string,
    linkTo?: string,
    btnTitle: string,
    onClick?: () => void,
}

export function EmptyHeader(props: Props) {

    const { icon, title, subtitle, linkTo, btnTitle, onClick } = props;

    return (
        <Header as='h2' icon textAlign='center' style={{ height: '-webkit-fill-available' }}>
            <Icon name={icon} />
            {title}
            <Header.Subheader>{subtitle}</Header.Subheader>
            <br />
            {linkTo == null && onClick ?
                <Button onClick={onClick} size='large' color='blue'>
                    {btnTitle}
                </Button>
                : (
                    <Button as={Link} to={linkTo} size='large' color='blue'>
                        {btnTitle}
                    </Button>
                )}
        </Header>
    );
}