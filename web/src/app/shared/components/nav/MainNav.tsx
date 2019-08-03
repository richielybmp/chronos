import { ReactNodeLike } from "prop-types";
import { Cronograma } from "chronos-core";
import React, { useState } from "react";
import { LoaderComponent } from "..";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

interface MainNavProps {
    children: ReactNodeLike
    , cronogramaList: Cronograma[]
    , logOut: (callback: Function) => void
    , fetchCronograma: (id: string) => void
}

export function MainNav({ logOut, children, fetchCronograma, cronogramaList }: MainNavProps) {

    const [isLoading, setIsLoading] = useState(false)

    const handleLogOut = () => {
        setIsLoading(true)
        logOut(() => {
            window.location.href = '/'
        })
    }

    const handleSetOnDetail = (id: string) => {
        fetchCronograma(id)
    }

    return (
        <>
            {
                isLoading &&
                <LoaderComponent tamanho='big' titulo="Carregando" />
            }

            <DesktopNav
                cronogramas={cronogramaList}
                onSairClick={handleLogOut}
                setOnDetail={handleSetOnDetail}>
                {children}
            </DesktopNav>
            <MobileNav
                cronogramas={cronogramaList}
                onSairClick={handleLogOut}
                setOnDetail={handleSetOnDetail}>
                {children}
            </MobileNav>
        </>
    )
}