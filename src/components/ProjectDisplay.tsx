import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
interface ProjectResponse {
    id: number;
    name: string;
}
const ProjectDisplay = ({ item }:{ item:any }) => {
    const [skills, setSkills] = useState<Array<ProjectResponse>>();
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    useEffect(() => {
        retrieveSkills();
    }, [])

    const retrieveSkills = async () =>{
        try {
            const response =  await axios.get(`http://localhost:8080/projectskill/skills/${item.id}`);
            setSkills(response.data);
        } catch (error) {
            console.log("Retrieve Skills failed")
        }
    }
    return(
    <>    
        <Button
            className="btnProject"
            style={{
                width: 300,
            }}
            onClick={()=> setOpen(true)}
            

        >
            
            
            {item.name} {<a className="smaller-text">{` (Click me)`}</a>}
           
        </Button>
        <Modal className="modalCard" isOpen={open} toggle={toggle}>
            <ModalHeader className="modalTitle">
                {item.name}
            </ModalHeader>
            <ModalBody className="modalCard">
                <img
                    alt="Card cap"
                    src={item.img}
                    width={200}
                    height={70}
                    style={{marginLeft: '80px'}}
                />
                <p style={{textAlign: "center",  height: 150, overflowY: 'auto', scrollbarWidth: "none"}} >
                    {item.description}
                </p>
            </ModalBody>
                
            <ModalFooter className="modalCard">
                <Row style={{marginTop: '5px'}}>
                    <Col >
                    {(skills && skills.length > 0) &&
                    
                    <Row style={{margin:'auto', marginTop: 5}} >
                        {skills.map((skill) => (
                            <Col md={6} >
                                <Badge
                                    color='dark'
                                    pill 
                                >
                                    {skill.name}
                                </Badge>
                                
                            </Col>
                        ))}
                    </Row>
                    
                }
                    </Col>
                    <Col > <Button className="btnGit" size="sm" onClick={() => window.open(item.gitUrl, '_blank')} >Git Code</Button></Col>
                </Row>
            </ModalFooter>
        </Modal>
        {/* <Card
            className="my-2 listCard"
            style={{
                width: 370,
            }}

        >
            
            <CardHeader  className="cardHeader">
                {item.name}
            </CardHeader>
            
            <img
                alt="Card cap"
                src={item.img}
                width={200}
                height={70}
                style={{marginLeft: '80px'}}
            />
            <CardBody >
                <p style={{textAlign: "center",  height: 150, overflowY: 'auto', scrollbarWidth: "none"}} >
                    {item.description}
                </p>
                
            </CardBody>
            <CardFooter>
                {(skills && skills.length > 0) &&
                    
                    <Row style={{margin:'auto', marginTop: 5}}>
                        {skills.map((skill) => (
                            <Col md={4}>
                                <Badge
                                    color='dark'
                                    pill 
                                >
                                    {skill.name}
                                </Badge>
                                
                            </Col>
                        ))}
                    </Row>
                    
                }
                
            </CardFooter>
            <CardFooter>
                <Row style={{marginTop: '5px'}}>
                    <Col> <Button className="btnProject" size="sm" >Git Code</Button></Col>
                </Row>
            </CardFooter> 
        </Card> */}
    </>)
} 

export default ProjectDisplay;