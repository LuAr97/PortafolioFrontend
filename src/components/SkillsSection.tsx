import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import axios from "axios";
import { Button, Container } from "reactstrap";
import SkillCard from "./SkillCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const SkillsSection = () => {
    const ref = useRef<HTMLUListElement>(null);
    const { scrollXProgress } = useScroll({ container: ref });
    const [skills, setSkills] = useState([]);

    const scrollLeft = () => {
        if (ref.current) {
            ref.current.scrollBy({ left: -710, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (ref.current) {
            ref.current.scrollBy({ left: 710, behavior: 'smooth' });
        }
    };

    useEffect(() =>{
        retrieveSkills();        
    },[]);

    const retrieveSkills = async () => {
        try {
            const response = await axios(`http://localhost:8080/skill/all`);
            setSkills(response.data);
        } catch (error) {
            console.log("Retrieve skills failed");
        }
    }

    return (
    <>
        <h2 style={{marginTop: 50}}>Skills</h2>
        <Container className="horizontal-scroll-container">
            <Button className="scroll-button" onClick={scrollLeft}><IoIosArrowBack /></Button>
            <ul className="skillsList" ref={ref}>
                {(skills != null && skills.length > 0) &&
                    skills.map((item, index) => (
                        <li key={index}>
                            <SkillCard item={item}/>
                        </li>
                    ))
                    
                }
            </ul>
            <Button className="scroll-button" onClick={scrollRight}><IoIosArrowForward /></Button>
        </Container>
    </>)
}
export default SkillsSection;