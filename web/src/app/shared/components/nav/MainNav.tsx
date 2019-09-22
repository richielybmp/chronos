import { ReactNodeLike } from "prop-types";
import { Cronograma } from "chronos-core";
import React, { useState } from "react";
import { LoaderComponent } from "..";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

interface MainNavProps {
    children: ReactNodeLike
    , cronogramaList: Cronograma[]
    , authState: any
    , logOut: (callback: Function) => void
    , fetchCronograma: (id: string) => void
}

export function MainNav({ logOut, children, fetchCronograma, cronogramaList, authState }: MainNavProps) {

    const [isLoading, setIsLoading] = useState(false)

    const handleLogOut = () => {
        setIsLoading(true)
        logOut(() => {
            window.location.href = '/';
        })
    }

    const handleSetOnDetail = (id: string) => {
        fetchCronograma(id);
    }

    if (authState.user) {
        const { name } = authState.user.user;

        return (
            <>
                {
                    isLoading &&
                    <LoaderComponent tamanho='big' titulo="Carregando" />
                }

                <DesktopNav
                    userName={name}
                    cronogramas={cronogramaList}
                    onSairClick={handleLogOut}
                    setOnDetail={handleSetOnDetail}>
                    {children}
                </DesktopNav>
                <MobileNav
                    userName={name}
                    cronogramas={cronogramaList}
                    onSairClick={handleLogOut}
                    setOnDetail={handleSetOnDetail}>
                    {children}
                </MobileNav>
            </>
        )
    }
    else return null;
}