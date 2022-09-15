import React, { createContext } from 'react';
import useIsScreenThin from '../../../hooks/isMobile';
import Device from './Device';

export type DeviceContextState = {
    isMobile: boolean
}

const contextDefaultValues: DeviceContextState = {
    isMobile: true,
}

export const DeviceContext = createContext<DeviceContextState>(
    contextDefaultValues
);


const DeviceProdiver: React.FC = ({ children }) => {
    const isSmallScreen = useIsScreenThin();

    return (
        <Device>
            {({ isMobile: isMobileDevice }) => (<DeviceContext.Provider value={{ isMobile: isMobileDevice || isSmallScreen }}>
                {children}
            </DeviceContext.Provider>)}
        </Device>
    );
};

export default DeviceProdiver;
