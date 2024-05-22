import axios from "axios";
import { useEffect, useState } from "react"
import { Button, ButtonGroup, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import CustomedCarousel from "./CustomeCarousel";
import { motion } from "framer-motion";
import { SlArrowRight } from "react-icons/sl";

const AboutMe = ({ scroll } : any) => {
    const [margin, setMargin] = useState(300);
    const [visible, setVisible] = useState(false);
    
    const handleClick = () => {
        setMargin(100);
        setVisible(true);
    }
    
    return (
       
        <Row style={{height: '100%'}}>
            <Col className="aboutme" sx={12} md={4}>
                
            </Col>
            <Col sx={12} md={6}>
                <Row>
                    <Container style={{marginTop: 50, height: 400}}>
                        
                            <h1 style={{borderBottomStyle: 'double', width: 200}}> About me </h1>
                            <Row style={{marginTop:50}}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 3, delay: 0.5 }}
                                >
                                    <h4 className="pAboutme" style={{textAlign: 'justify'}}>
                                        I'm Luisa, a Colombian soul with a passion for tech and a heart full of warmth. 
                                    </h4>
                                    <h4 className="pAboutme" style={{textAlign: 'justify'}}>
                                        I'm that person always ready to jump in and help out, whether it's with a tricky coding problem or just lending an ear. 
                                    </h4>
                                    <h4 className="pAboutme" style={{textAlign: 'justify'}}>
                                        My two furry companions are my world outside of work they keep me grounded and remind me to appreciate the little things.
                                    </h4>
                                </motion.div>
                            </Row>
                            <Row style={{marginTop:10}}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 3, delay: 2 }}
                                >
                                    <h3 style={{color:'#fff'}}>
                                       Profetionally
                                    </h3>
                                </motion.div>
                            </Row>
                            <Row style={{marginTop:5}}>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 3,  delay: 2.5 }}
                                >
                                    <h4 className="pAboutme" style={{textAlign: 'justify'}}>
                                        Coming from a Computer Science background, I pursued a bachelor's degree in Computer Science in Guatemala. 
                                    </h4>
                                    <h4 className="pAboutme" style={{textAlign: 'justify'}}>
                                        During this time, I participated in various activities aimed at promoting women in technology.                                    </h4>
                                    <h4 className="pAboutme" style={{textAlign: 'justify'}}>
                                        I gained experience as a web developer, utilizing technologies such as PHP, SQL, and Symfony. Later on, 
                                        I obtained a Master's degree in Cybersecurity in Australia, where I had the opportunity to work on projects at IAG, 
                                        using ORBIT, React, and SQL. Additionally, I acquired skills in automation with Selenium and Cucumber.
                                    </h4>
                                </motion.div>
                            </Row>
                            
                    
                        
                        
                        
                    </Container>
                </Row>
                
                
            </Col>
            <Col sx={12} md={1} className="d-flex justify-content-center align-items-center">
                
                <Button outline onClick={() => scroll(1)} style={{ height: '100px' }}>
                    <SlArrowRight />       
                </Button>

            </Col>
            
            
        </Row>
        
    )
}

export default AboutMe;