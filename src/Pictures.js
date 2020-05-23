import React from 'react';
import {Carousel, Image} from 'react-bootstrap';
import scr1 from './img/Screenshot1.png';
import scr2 from './img/Screenshot2.png';
import scr3 from './img/Screenshot3.png';

const Pictures = () => {
    const items = [
        {img: scr1, title: 'Stylized playing fields', text: 'Hide from the enemy and attack from cover'},
        {img: scr2, title: 'Run, Wizard, Run!', text: 'Run as fast as you can to avoid dangerous spells'},
        {img: scr3, title: 'Develop tactics', text: 'Catch the enemy by surprise'}
    ];

    return (
        <Carousel className="shadow-lg">
                {items.map(value =>
                    <Carousel.Item key={value.title}>
                        <Image src={value.img}
                            className="w-100"
                            rounded/>
                        <Carousel.Caption>
                            <h3 className="text-info">{value.title}</h3>
                            <p>{value.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
        </Carousel>
    );
};

export default Pictures;