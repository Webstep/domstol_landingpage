import dynamic from 'next/dynamic'

const DeviceProvider = dynamic(() => import('./DeviceProvider'), { ssr: false })

export default DeviceProvider
export { DeviceContext } from './DeviceProvider'
