import React from 'react';
import "./style.css"
import { Button } from 'semantic-ui-react';

interface ButtonsProps {
    actionNewRevisao: () => void,
    actionNewMaterial: () => void,
    actionNewExercicio: () => void,
}

export function ExpansibleButtons(props: ButtonsProps) {
    return (
        <div className='center-content'>
            <Button circular icon='plus' color='green' content="Revisão" onClick={props.actionNewRevisao} />
            <Button circular icon='plus' color='green' content="Material" onClick={props.actionNewMaterial} />
            <Button circular icon='plus' color='green' content="Exercícios" onClick={props.actionNewExercicio} />
        </div>
    );
}