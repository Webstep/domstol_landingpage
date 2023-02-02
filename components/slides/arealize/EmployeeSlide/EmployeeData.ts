import { StaticImageData } from 'next/image'
import Arve from '../../../../public/assets/Arve.png'

export const EmployeeData: {
    img: StaticImageData
    firstname: string
    lastname: string
    quote?: string
    role: string
    url: string
}[] = [
    {
        img: Arve,
        firstname: 'Arve',
        lastname: 'Nygård',
        quote: 'Utførende konsulent i Arealize oppdraget',
        role: 'Seniorkonsulent',
        url: 'https://www.webstep.no/arve-nygard/',
    },
]
