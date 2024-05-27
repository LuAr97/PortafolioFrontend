import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Introduction from '../components/Introduction';
import ProjectBlock from '../components/ProjectBlock';
import Skills from '../components/Skills';
import NavbarComponent from '../components/NavbarComponent';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import Projects from '../components/Projects';
import SkillsSection from '../components/SkillsSection';
const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance+200, distance+200]);
}
const Home = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

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
        <section className='dark-section' id='aboutme'>
            <div ref={ref}>
                <h2>About me</h2>
            </div>
            {/* <motion.h2 style={{ y }}>{`Projects`}</motion.h2> */}
        </section>
        <section className='skill-section' id='skills'>
            <div ref={ref}>
                <SkillsSection />
            </div>
            {/* <motion.h2 style={{ y }}>{`Skills`}</motion.h2> */}
        </section>
        <section className='dark-section' id='projects'>
            <div ref={ref}>
                <Projects />
            </div>
            {/* <motion.h2 style={{ y }}>{`Projects`}</motion.h2> */}
        </section>
        
        <section className='contact-section' id='contactme'>
            <div ref={ref}>
            </div>
            {/* <motion.h2 style={{ y }}>{`Projects`}</motion.h2> */}
        </section>
        </>
    //<>
    // <div>
    //     <Parallax ref={parallax} pages={1} style={{ top: '0.5', left: '0', scrollbarWidth: 'none' }} className='animation'>
    //         <ParallaxLayer className='background' offset={0} speed={0.5}>
    //             <Introduction />
    //         </ParallaxLayer>
            
    //         {/* <Introduction scroll={scroll}/>
    //         <ParallaxLayer style={{backgroundColor : 'rgb(36, 15, 33)', height: '70vh'}} offset={0.7} speed={0.5}>
    //         </ParallaxLayer> */}
    //         {/* <ParallaxLayer style={{backgroundColor : 'rgba(36, 15, 33,0.7)', height: '50vh'}} offset={1} speed={0.5}>
    //             <ProjectBlock />
    //         </ParallaxLayer>
    //         <ParallaxLayer style={{backgroundColor : 'rgba(36, 15, 33,1)', height: '50vh'}} offset={1.5} speed={0.5}>
    //             <ProjectBlock />
    //         </ParallaxLayer> */}
    //         {/* <ParallaxLayer offset={1} speed={0.5}>
    //             <Skills />
    //         </ParallaxLayer>
    //         <ParallaxLayer style={{backgroundColor : 'rgb(36, 15, 33)'}} offset={2} speed={0.5}>
    //             <ProjectBlock />
    //         </ParallaxLayer> */}
    //     </Parallax>
    // </div></>);
);
};

export default Home;