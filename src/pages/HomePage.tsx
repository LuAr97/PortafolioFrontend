import React, { useRef } from 'react'
import Introduction from '../components/Introduction';

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance+200, distance+200]);
}
const HomePage = () => {
    const ref = useRef(null); 

    const scrollToSection = (id : string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    // const scroll = (to: number) => {
    //     if (parallax.current) {
    //     parallax.current.scrollTo(to)
    //     }
    // }
    return(
        <>
        <section className='background' id='landPage'>
            <div ref={ref}>
                <Introduction scroll={scrollToSection}/>
            </div>
        </section>
        </>)
}
export default HomePage;