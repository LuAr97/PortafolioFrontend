import axios from "axios";
import { color } from "framer-motion";
import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { MdOutlineDeveloperBoard } from "react-icons/md";

import { Button, Col, Container, Row } from "reactstrap";

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
const Experience = ({ scroll, current, limit, end } : { scroll : any, current  : number, limit : number, end: boolean }) => {
    const [ exp, setExp ] = useState<Array<ExperienceResponse>>([]);
   

    useEffect(() => {
      retrieveExperience();
    }, [])

    const retrieveExperience = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/experience/all`);
        console.log(response.data)
        setExp(response.data);
        console.log('exp',exp);
      } catch (error) {
        console.log("Retrieve experience failed");
      }
    }

    return (
    <Row style={{height: '100%', marginTop: 50}}>
        <Col sx={12} md={1} className="d-flex justify-content-center align-items-center">
        
            <Button outline onClick={() => scroll(current - 1)} style={{ height: '100px' }}>
                <SlArrowLeft />       
            </Button>

        </Col>
        <Col sx={12} md={9}>
            <h1 style={{borderBottomStyle: 'double', width: 300}}>My experience</h1>
            
            <Row style={{height: '100%', marginTop: 70}}>
                
                {exp != null && 
                    exp.map((item,index) => (
                        (index == (limit -1) || index == (limit)) && 
                        <Col xs={12} md={6} >
                            <Container style={{height: '70%', border: '2px solid #fff'}}>
                                <Row style={{height: '30%', marginTop: 20}}>
                                    <h3 style={{color: '#fff'}}>{item.position}</h3>
                                    <MdOutlineDeveloperBoard style={{color: '#fff'}} size={70}/>
                                </Row>
                                
                                <Row>
                                    <Col xs={12} md={8} style={{textAlign: 'left'}}>
                                        <h5 style={{textDecoration: 'underline', color: '#fff'}}>{item.company}</h5>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <h6 style={{color: '#fff'}}>{item.entry} - {item.end}</h6>
                                    </Col>
                                </Row>
                                <Row style={{marginTop: 35, textAlign: 'left', margin: 'auto' }}>
                                    <ul>
                                        {item.tasks.map((task) => (
                                            
                                            <li style={{color : '#fff'}}>
                                                <h5 style={{color : '#fff'}}>{task.description}</h5>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                </Row>
                            </Container>
                        </Col>
                    ))
                }
                {/* <Col xs={12} md={6} >
                    <Container style={{height: '100%', border: '2px solid #fff'}}>

                    </Container>
                </Col> */}

            </Row>
        </Col>
        <Col sx={12} md={1} className="d-flex justify-content-center align-items-center">
            
            {!end &&
                <Button outline onClick={() => scroll(current + 1)} style={{ height: '100px'}}>
                    <SlArrowRight />       
                </Button>
            }

        </Col>
    </Row>
    );
};

export default Experience;