import React, { useEffect, useRef } from 'react'
import {isMobile} from 'react-device-detect';
import DrawerProfile from '../components/DrawerProfile';
import Introduction from '../components/Introduction';
import { Box} from '@mui/material';
import AboutMe from '../components/Aboutme';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Menu from '../components/Menu';
import Skills from '../components/Skills';

const Home = () => {
    const ref = useRef(null);
    console.log(isMobile)
    const scrollToSection = (id : string) => {
        console.log(id)
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (<>
        
        <Menu scroll={scrollToSection}/>
        <Box  className="content">
            {isMobile && 
                <section><div ref={ref}><DrawerProfile /></div></section>
            }
            <section><div ref={ref} id='landpage'><Introduction scroll={scrollToSection}/></div></section>
            <section><div ref={ref} id='aboutme'><AboutMe /></div></section>
            <section><div ref={ref} id='resume'><Resume /></div></section>
            <section><div ref={ref} id='projects'><Projects /></div></section>
            <section><div ref={ref} id='skills'><Skills /></div></section>
        </Box>
        {!isMobile && <DrawerProfile />}
        
    </>)
}

export default Home;