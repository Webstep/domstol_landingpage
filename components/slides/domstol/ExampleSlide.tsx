import React from 'react'
import ArrowButton, { Direction, Size } from '../../common/ArrowButton'

const ExampleSlide = () => {
    return (
        <>
            <section>
                <ArrowButton
                    direction={Direction.Left}
                    onClick={() => console.log('test')}
                    size={Size.Large}
                />
                <ArrowButton
                    direction={Direction.Right}
                    onClick={() => console.log('test')}
                    size={Size.Large}
                />
                <ArrowButton
                    direction={Direction.Down}
                    onClick={() => console.log('test')}
                />
                <ArrowButton
                    direction={Direction.Up}
                    onClick={() => console.log('test')}
                />
            </section>

            {/* provides 5 sections to "test" scrolling 			 */}
            {[...new Array(5)].map((_, index) => (
                <section key={index} id={'test' + index}>
                    {index + 1}
                </section>
            ))}
        </>
    )
}

export default ExampleSlide
