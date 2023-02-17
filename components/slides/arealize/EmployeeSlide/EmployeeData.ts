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
        quote: 'Startups er et kinderegg! Kombinasjonen kreativitet, nysgjerrighet og opplevd verdi av kunnskap er helt gull. Anbefales!',
        role: 'Seniorkonsulent',
        url: 'https://www.webstep.no/arve-nygard/',
    },
]
