import React, { useState, useEffect } from 'react';
import { Checkbox, Form, Grid, Segment } from 'semantic-ui-react';

interface Props {
    setOptionSelected: (option: number) => void,
    value: number,
}

function RevisaoContent(props: Props) {

    const [checked, setChecked] = useState()

    const handleCheckChange = (el: number) => {
        setChecked(el)
        props.setOptionSelected(el)
    }

    useEffect(() => {
        setChecked(props.value)
    }, [props.value])

    return (
        <div className="section-revisoes">
            <Segment basic>
                <Form.Group>
                    <Grid columns={4} style={{ marginTop: 0 }}>
                        <Grid.Column mobile={8} computer={4}>
                            <Checkbox label='24 horas' checked={checked === 0} onChange={() => handleCheckChange(0)} />
                        </Grid.Column>
                        <Grid.Column mobile={8} computer={4}>
                            <Checkbox label='7 dias' checked={checked === 1} onChange={() => handleCheckChange(1)} />
                        </Grid.Column>
                        <Grid.Column mobile={8} computer={4}>
                            <Checkbox label='15 dias' checked={checked === 2} onChange={() => handleCheckChange(2)} />
                        </Grid.Column>
                        <Grid.Column mobile={8} computer={4}>
                            <Checkbox label='30 dias' checked={checked === 3} onChange={() => handleCheckChange(3)} />
                        </Grid.Column>
                    </Grid>
                </Form.Group>
            </Segment>
        </div>
    );
}

export default RevisaoContent;