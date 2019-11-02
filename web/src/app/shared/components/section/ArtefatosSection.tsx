
import React from "react";
import { Artefato } from "chronos-core";
import SliderArtefatosContainer from "../../../containers/SliderArtefatosContainer";

interface Props {
    m: Artefato[]
    , r: Artefato[]
    , e: Artefato[]
    , handleEdit: (id: string, tipo: number) => void
}

export function ArtefatosSection(props: Props) {

    return (
        <>
            <SliderArtefatosContainer m={props.m} r={props.r} e={props.e} handleEdit={props.handleEdit} />
        </>
    )
}