import React, { useEffect, useRef } from 'react';
import Card from './Card';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nikelogo from './images/nikeee.png';
import nike1 from './images/NIke-1.png';
import jordanlogo from './images/jordan-logo.png';
import jordan from './images/jordan.png';
import shoe3 from './images/shoe-3.png';
import shoe4 from './images/shoe-4.png';
import shoe5 from './images/shoe-5.png'

function Subcard() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    const cardsData = [
        { src: nikelogo, immg: nike1, title: "Cortez 23 Premium (W)", price: "R 2,099.00" },
        { src: jordanlogo, immg: jordan, title: "Air Jordan 1 Element", price: "R 3,699.00" },
        { src: nikelogo, immg: shoe3, title: "Dunk Low (GS)", price: "R 1,799.00" },
        { src: jordanlogo, immg: shoe5, title: "Air Jordan 1 MM High (W)", price: "R 2,999.00" },
        
    ];
    console.log("h");
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start: "left top",
                end: "right top",
                scrub: true,
                horizontal: true, 
            },
        });

        tl.from(ref.current, { opacity: 1, duration: 0.2, ease: "power2.inOut" });

        

    }, []);

    return (
        <>
            <div ref={ref} className='flex flex-row gap-4 opacity-100'>
            <div className=' ml-[30rem]'></div>
                <div className='flex space-x-4'>
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            src={card.src}
                            immg={card.immg}
                            title={card.title}
                            price={card.price}
                        />
                    ))}
                    
                </div>
                <div className=' mr-44 '></div>
            </div>
        </>
    );
}

export default Subcard;
