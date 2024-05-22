import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "reactstrap";
import ListDisplay from "./ListDisplay";
import CardsDisplay from "./CardsDisplay";

const Skills = () => {
    const [buttonGroup, setButtonGroup] = useState(0);
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState ([])
    
    const retrieveSkills = async () => {
        try {
            const response = await axios(`http://localhost:8080/skill/all`);
            setSkills(response.data);
        } catch (error) {
            console.log("Retrieve skills failed");
        }
    }

    const retrieveProjects = async () => {
        try {
            const response = await axios(`http://localhost:8080/project/all`);
            setProjects(response.data);
        } catch (error) {
            console.log("Retrieve projects failed");
        }
    }

    const show = {
        opacity: 1,
        display: "block"
    };

    useEffect(() =>{
        retrieveSkills();
        retrieveProjects();
        
    },[])
    return(<>
        <Row>
            <h1>Skills & Projects</h1>
            
        </Row>
        <Row style={{marginTop: buttonGroup == 0 ? 150 : 0 }}>
            <Col>
            <p> Click skills or projects buttons to discover more about my capabilities</p>
                <ButtonGroup>
                    <Button className="transparentSkills" outline onClick={() => setButtonGroup(1)}>Projects</Button>
                    <Button className="transparentSkills" outline onClick={() => setButtonGroup(2)}>Skills</Button>
                </ButtonGroup>
            </Col>
        </Row>
        
            <Row>
                {buttonGroup == 2 &&
                    <CardsDisplay list={skills} type='skill'/>
                }
                {buttonGroup == 1 &&
                    <CardsDisplay list={projects} type='project'/>
                }
            </Row>

    </>);
}

export default Skills;