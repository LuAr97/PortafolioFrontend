import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { Button, Container } from "reactstrap";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
    const ref = useRef<HTMLUListElement>(null);
    const { scrollXProgress } = useScroll({ container: ref });
    const [projects, setProjects] = useState ([]);

    const scrollLeft = () => {
        if (ref.current) {
            ref.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (ref.current) {
            ref.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    useEffect(() =>{
        retrieveProjects();
        
    },[]);

    const retrieveProjects = async () => {
        try {
            const response = await axios(`http://localhost:8080/project/all`);
            setProjects(response.data);
        } catch (error) {
            console.log("Retrieve projects failed");
        }
    }
    return (
    <>
        <h2>Projects</h2>
        <Container className="horizontal-scroll-container">
        <Button className="scroll-button" onClick={scrollLeft}><IoIosArrowBack /></Button>
            <ul className="projectsList" ref={ref} style={{height: 'auto'}}>
                {(projects != null && projects.length > 0) &&
                    projects.map((item, index) => (
                        <li key={index}>
                            <ProjectCard item={item} />
                        </li>
                    ))
                    
                }
            </ul>
            <Button className="scroll-button" onClick={scrollRight}><IoIosArrowForward /></Button>
        </Container>
    </>)
}
export default Projects;