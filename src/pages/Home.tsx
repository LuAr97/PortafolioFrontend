import React, { useRef } from 'react'
import Introduction from '../components/Introduction';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import Projects from '../components/Projects';
import SkillsSection from '../components/SkillsSection';
import About from '../components/About';
import ContactMe from '../components/ContactMe';

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
    return(
        <>
        <section className='background' id='landPage'>
            <div ref={ref}>
                <Introduction scroll={scrollToSection}/>
            </div>
        </section>
        <section className='dark-section' id='aboutme'>
            <div ref={ref}>
                <About />
            </div>
        </section>
        <section className='skill-section' id='projects'>
            <div ref={ref}>
                
                <SkillsSection />
                <hr className={`my-4`} style={{ margin: '20px 0', height: 20 }} />
                <Projects />
            </div>
        </section>
        
        
        <section className='contact-section' id='contactme'>
            <div ref={ref}>
                <ContactMe />
            </div>
        </section>
        </>
    );
};

export default Home;