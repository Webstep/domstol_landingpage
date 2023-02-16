import { StaticImageData } from 'next/image'
import Brigitt from '../../../../public/assets/Brigitt.jpg'
import Carl from '../../../../public/assets/Calle.jpg'

export const EmployeeData: {
    img: StaticImageData
    firstname: string
    lastname: string
    quote: string
    role: string
    url: string
}[] = [
    {
        img: Brigitt,
        firstname: 'Brigitt',
        lastname: 'Bright',
        quote: '-  Noe av det beste med å være en del av dette prosjektet, er alt det nye jeg har lært, innsikten i hvordan rettsvesenet i Norge fungerer.',
        role: 'Systemutvikler',
        url: '',
    },
    {
        img: Carl,
        firstname: 'Carl',
        lastname: 'Bøkestad',
        quote: '-  Det som er gøy med å jobbe med DA er at man kjenner på viktigheten av det man gjør. Ikke bare for oss som jobber her, men for den norske befolkningen og det norske demokratiet. Det er ikke et hvilket som helst prosjekt.',
        role: 'Arkitekt',
        url: '',
    },
]
