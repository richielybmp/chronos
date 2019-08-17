import React, { useState } from 'react';
import { Checkbox, Form, Grid, Segment } from 'semantic-ui-react';

interface Props {
    setOptionSelected: (option: number) => void
}

function RevisaoContent(props: Props) {

    // estado inicial terá de vir do assuntoOnDetail
    const [checked, setChecked] = useState('')

    const handleCheckChange = (el: string) => {
        setChecked(el)
        props.setOptionSelected(parseInt(el))
    }

    return (
        <div className="section-revisoes">
            <Segment basic>
                <Form.Group>
                    {/* <h2>Revisão</h2> */}
                    <Grid columns={4} style={{ marginTop: 0 }}>
                        <Grid.Column mobile={6} computer={3}>
                            <Checkbox label='24 horas' checked={checked === "1"} onChange={() => handleCheckChange('1')} />
                        </Grid.Column>
                        <Grid.Column mobile={6} computer={3}>
                            <Checkbox label='7 dias' checked={checked === "7"} onChange={() => handleCheckChange('7')} />
                        </Grid.Column>
                        <Grid.Column mobile={6} computer={3}>
                            <Checkbox label='15 dias' checked={checked === "15"} onChange={() => handleCheckChange('15')} />
                        </Grid.Column>
                        <Grid.Column mobile={6} computer={3}>
                            <Checkbox label='30 dias' checked={checked === "30"} onChange={() => handleCheckChange('30')} />
                        </Grid.Column>
                    </Grid>
                </Form.Group>
            </Segment>
        </div>
    );
}

export default RevisaoContent;