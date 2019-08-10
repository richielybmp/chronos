import React, { useState } from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

function RevisaoContent() {

    // estado inicial terá de vir do assuntoOnDetail
    const [checked, setChecked] = useState('')

    const handleCheckChange = (el: string) => {
        setChecked(el)
    }

    return (
        <div className="section-revisoes">
            <Form.Group inline>
                <h2>Revisão</h2>
                <Checkbox label='24 horas' checked={checked === "1"} onChange={() => handleCheckChange('1')} />
                <Checkbox label='7 dias' checked={checked === "7"} onChange={() => handleCheckChange('7')} />
                <Checkbox label='15 dias' checked={checked === "15"} onChange={() => handleCheckChange('15')} />
                <Checkbox label='30 dias' checked={checked === "30"} onChange={() => handleCheckChange('30')} />
            </Form.Group>
        </div>
    );
}

export default RevisaoContent;