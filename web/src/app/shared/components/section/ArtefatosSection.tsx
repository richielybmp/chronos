
import React, { useState } from "react";
import SideMenu from "./SideMenu";
import SideMenuContent from "./SideMenuContent";
import RevisaoContent from "./RevisaoContent";
import { Divider } from "semantic-ui-react";

export function ArtefatosSection() {

    return (
        <>
            <RevisaoContent />
            {/* <SideMenu /> */}
            <Divider />
            <SideMenuContent />
        </>
    )
}