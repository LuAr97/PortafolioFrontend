import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Tooltip, Card, CardBody, CardHeader, Col, Collapse, Row } from "reactstrap";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

interface ProjectResponse {
    id : number;
    name : string;
    gitUrl : string;
}
const SkillDisplay = ({item} : {item: any}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [projects, setProjects] = useState<Array<ProjectResponse>>();
    useEffect(() => {
        retrieveSkills();
    }, [])

    const retrieveSkills = async () =>{
        try {
            const response =  await axios.get(`http://localhost:8080/projectskill/projects/${item.id}`);
            setProjects(response.data);
        } catch (error) {
            console.log("Retrieve Skills failed")
        }
    }

    const toggle = () => setIsOpen(!isOpen);
    return(<>
        <img 
            src={item.img}
            alt={item.name}
            width={80}
            height={80}
            />
            
            
            <Card
                className="my-2 listCard"
                style={{width: '80%', marginLeft: '10%'}}

            >
                <CardHeader  className="cardHeader" onClick={toggle} id="header">
                    {item.name}
                    <div className="iconContainer">
                        {(projects && projects.length > 0 ) &&  (isOpen ? <FaAngleUp /> : <FaAngleDown id="collapseTooltip"/>)}
                        
                    </div>
                </CardHeader>    
                {(projects && projects.length > 0 ) &&
                    <Collapse isOpen={isOpen}>
                        <CardBody>
                            <p style={{textAlign:'left'}}>This skill has been used in the following projects:</p>
                            <Row style={{margin:'auto', marginTop: 5}}>
                                {projects.map((project) =>(
                                    <Col md={5}>
                                        <a href={project.gitUrl} target="_blank">
                                            <Badge
                                                color='dark'
                                                pill 
                                            >
                                                {project.name}
                                            </Badge>
                                        </a>
                                    </Col>
                                ))}
                            </Row>
                        </CardBody>
                    </Collapse>
                }
            </Card>
    </>);
};

export default SkillDisplay;