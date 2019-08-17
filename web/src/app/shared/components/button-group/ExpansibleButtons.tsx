import React, { useState, useRef, useEffect } from 'react';
import "./style.css"
import { Button } from 'semantic-ui-react';

interface ButtonsProps {
    actionNewRevisao: () => void,
    actionNewMaterial: () => void,
    actionNewExercicio: () => void,
}

function useComponentVisible(initialIsVisible: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);

    const ref = useRef<HTMLInputElement>(null);

    const handleHideDropdown = (event: any) => {
        if (event.key === "Escape") {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (event: any) => {
        if (event.target.parentElement && (event.target.parentElement.className == "ui blue circular icon button" || event.target.parentElement.className == "teste")) {
            return
        }
        else if (ref != undefined && ref.current != undefined) {
            if (!ref.current.contains(event.target)) {
                setIsComponentVisible(false);
            }
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
}

export function ExpansibleButtons(props: ButtonsProps) {

    // const { actionNewRevisao, actionNewExercicio, actionNewMaterial } = props;

    const [isOpen, setIsOpen] = useState(false)

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const handleNewClick = () => {
        setIsOpen(!isOpen)
        setIsComponentVisible(!isComponentVisible)
    }

    return (
        <div style={{ margin: '15px 0', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            {/* <div className='teste'>
                <Button
                    circular
                    icon='plus'
                    color='purple'
                    content='Artefatos'
                    onClick={() => handleNewClick()}
                    style={{ float: 'left', backgroundColor: 'rgb(77, 65, 127)' }} />
            </div> */}

            {/* <div ref={ref} className={isComponentVisible ? 'content-buttons' : 'content-buttons-closed'}> */}
            <Button circular icon='plus' color='green' content="Revisão" onClick={props.actionNewRevisao} />
            <Button circular icon='plus' color='green' content="Material" onClick={props.actionNewMaterial} />
            <Button circular icon='plus' color='green' content="Exercícios" onClick={props.actionNewExercicio} />
            {/* </div> */}
        </div>
    );
}