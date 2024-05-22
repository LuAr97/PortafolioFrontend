import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import Introduction from '../components/Introduction';
import ProjectBlock from '../components/ProjectBlock';
import Skills from '../components/Skills';
const Home = () => {
    const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
    return(
    <div className='background'>
        <Parallax ref={parallax} pages={3} style={{ height: '100vh',top: '0', left: '0' }} className='animation'>
            <Introduction scroll={scroll}/>
            <ParallaxLayer offset={1} speed={0.5}>
                <Skills />
            </ParallaxLayer>
            <ParallaxLayer style={{backgroundColor : 'rgb(36, 15, 33)'}} offset={2} speed={0.5}>
                <ProjectBlock />
            </ParallaxLayer>
        </Parallax>
    </div>);
};

export default Home;