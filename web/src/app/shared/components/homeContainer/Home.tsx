import React from 'react'
import { ReactNodeLike } from 'prop-types'
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import { SegmentMock } from '..';

interface ResponsiveContainerProps {
    children: ReactNodeLike,
}

const ResponsiveContainer = ({ children }: ResponsiveContainerProps) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

export function Home() {
    return (
        <ResponsiveContainer>
            <SegmentMock />
            <SegmentMock />
            <SegmentMock />
        </ResponsiveContainer>
    )
}

