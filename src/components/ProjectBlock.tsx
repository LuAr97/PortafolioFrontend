import { Container } from "reactstrap";
import React, { useEffect, useRef, useState } from "react";
import "../styles/ProjectBlock.css"
import CustomedCarousel from "./CustomeCarousel";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import axios from "axios";
import { setgroups } from "process";

interface  Task{
  description : string;
}

interface ExperienceResponse {
  experience_id: number;
  company : string;
  position : string;
  entry : string;
  end : string;
  tasks: Task[];
}
const ProjectBlock = () => {
    const parallax = useRef<IParallax>(null);
    const scroll = (to: number) => {
      if (parallax.current) {
        parallax.current.scrollTo(to)
      }
    };


    return(<Container className="block-p">
         {/* <Parallax ref={parallax} pages={1} style={{  width: '100vh', top: '0', left: '0'}} className='animation' horizontal> */}
            {/* <ParallaxLayer offset={0} speed={0.5}> */}
                <AboutMe scroll={scroll}/>
            {/* </ParallaxLayer> */}
           
            
            {/* <ParallaxLayer offset={1} speed={0.5}>
              <Experience scroll={scroll} current={1} limit={1} end={false}/>
            </ParallaxLayer>
            
           
            <ParallaxLayer offset={2} speed={0.5}>
              <Experience scroll={scroll} current={2} limit={3} end={true}/>
            </ParallaxLayer> */}
        {/* </Parallax> */}
    </Container>)
};

export default ProjectBlock;