import { ReactNode } from 'react'
import * as rdd from 'react-device-detect'

interface DeviceProps {
    children: (props: typeof rdd) => ReactNode
}

const Device: React.FC<DeviceProps> = ({ children }) => {
    return <div className="device-layout-component">{children(rdd)}</div>
}

export default Device;