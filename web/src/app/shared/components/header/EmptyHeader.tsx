import React from 'react'
import { Button, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

interface Props {
    icon: any,
    title: string,
    subtitle: string,
    linkTo: string,
    btnTitle: string,
}

export function EmptyHeader(props: Props) {

    const { icon, title, subtitle, linkTo, btnTitle } = props;

    return <Header as='h2' icon textAlign='center'>
        <Icon name={icon} />
        {title}
        <Header.Subheader>{subtitle}</Header.Subheader>
        <br />
        <Button as={Link} to={linkTo} size='large' color='blue'>
            {btnTitle}
        </Button>
    </Header>;
}