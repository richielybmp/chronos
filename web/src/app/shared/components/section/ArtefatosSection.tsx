
import React from "react";
import { Divider } from "semantic-ui-react";
import { Artefato } from "chronos-core";
import SliderArtefatosContainer from "../../../containers/SliderArtefatosContainer";

interface Props {
    artefatos: Artefato[]
    , handleEdit: (id: string, tipo: number) => void
}

export function ArtefatosSection(props: Props) {
    return (
        <>
            <Divider />
            <SliderArtefatosContainer artefatos={props.artefatos} handleEdit={props.handleEdit} />
        </>
    )
}