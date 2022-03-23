import React from 'react'
import ScrollButton, { Direction, Size } from '../../common/ScrollButton'

const ExampleSlide = () => {
    return (
        <>
            <section>
                <ScrollButton
                    direction={Direction.Left}
                    onClick={() => console.log('test')}
                    size={Size.Large}
                />
                <ScrollButton
                    direction={Direction.Right}
                    onClick={() => console.log('test')}
                    size={Size.Large}
                />
                <ScrollButton
                    direction={Direction.Down}
                    onClick={() => console.log('test')}
                />
                <ScrollButton
                    direction={Direction.Up}
                    onClick={() => console.log('test')}
                />
            </section>

            {/* provides 5 sections to "test" scrolling 			 */}
            {[...new Array(5)].map((_, index) => (
                <section key={index}>{index + 1}</section>
            ))}
        </>
    )
}

export default ExampleSlide
