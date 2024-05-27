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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
        >
        <Container  className= "containerIntro" style={{ backgroundColor : 'rgba(36, 15, 33,0.7)', marginTop: 50}}>
            <Row className="rowIntro" >
                <h4 className= "centered-heading" style={{borderBottomStyle: 'double', color: '#fff', width: 200}}>About me</h4>
            </Row>
            <Row style={{marginTop: 20, alignContent: 'center', }}>
                
                    <Col xs={12} md={6}>
                        <Card 
                            style={{ backgroundColor : 'rgba(36, 15, 33,0)', width: '23rem', borderColor: 'rgba(36, 15, 33,0)'
                            }}
                        >
                            <img src="/profile.png" width={150} height={150} style={{objectFit: 'cover', borderRadius: '75px', margin: 'auto'}}/>
                            <CardBody>
                                <CardText className="pAboutme" style={{textAlign: 'center'}}>
                                    I'm Luisa, a Colombian soul with a passion for tech and a heart full of warmth. 
                                </CardText>
                                <CardText className="pAboutme" style={{textAlign: 'center'}}>
                                    I'm that person always ready to jump in and help out, whether it's with a tricky coding problem or just lending an ear. 
                                </CardText>
                                <CardText className="pAboutme" style={{textAlign: 'center'}}>
                                    My two furry companions are my world outside of work they keep me grounded and remind me to appreciate the little things.                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card 
                            style={{ backgroundColor : 'rgba(36, 15, 33,0)', width: '23rem', borderColor: 'rgba(36, 15, 33,0)'
                            }}
                        >
                            <img src="/aboutme.png" width={150} height={150} style={{objectFit: 'cover', borderRadius: '75px', margin: 'auto'}}/>
                            <CardBody>
                                <CardText className="pAboutme" style={{textAlign: 'justify'}}>
                                    Coming from a Computer Science background with a Master in Cybersecurity.
                                </CardText>
                                <CardText className="pAboutme" style={{textAlign: 'justify'}}>
                                    I have gained experience as a web developer, utilizing technologies such as React, Java, SQL, and Symfony.
                                </CardText>
                                <CardText className="pAboutme" style={{textAlign: 'justify'}}>
                                    Additionally, I acquired skills in automation with Selenium and Cucumber.
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    {/* <p className="pAboutme" style={{textAlign: 'justify'}}>
                        I'm Luisa, a Colombian soul with a passion for tech and a heart full of warmth. 
                        I'm that person always ready to jump in and help out, whether it's with a tricky coding problem or just lending an ear. 
                        My two furry companions are my world outside of work they keep me grounded and remind me to appreciate the little things.
                    </p> */}
                    
                
            </Row>
            
        </Container>
        </motion.div>
        
        // <Row style={{height: '100%'}}>
        //     {/* <Col className="aboutme" sx={12} md={4}>
                
        //     </Col> */}
        //     <Col sx={12} md={6}>
        //         <Row>
        //             <Container style={{marginTop: 50, height: 400}}>
                        
        //                     <h4 style={{borderBottomStyle: 'double'}}> About me </h4>
        //                     <Row style={{marginTop:50}}>
        //                         <motion.div
        //                             initial={{ opacity: 0 }}
        //                             animate={{ opacity: 1 }}
        //                             transition={{ duration: 3, delay: 0.5 }}
        //                         >
        //                             <p className="pAboutme" style={{textAlign: 'justify'}}>
        //                                 I'm Luisa, a Colombian soul with a passion for tech and a heart full of warmth. 
        //                             </p>
        //                             <p className="pAboutme" style={{textAlign: 'justify'}}>
        //                                 I'm that person always ready to jump in and help out, whether it's with a tricky coding problem or just lending an ear. 
        //                             </p>
        //                             <p className="pAboutme" style={{textAlign: 'justify'}}>
        //                                 My two furry companions are my world outside of work they keep me grounded and remind me to appreciate the little things.
        //                             </p>
        //                         </motion.div>
        //                     </Row>
                        
        //             </Container>
        //         </Row>
                
                
        //     </Col>
        //      <Col sx={12} md={6}>
        //         <Row>
        //             <Container style={{marginTop: 50, height: 400}}>
        //                     <Row style={{marginTop:10}}>
        //                         <motion.div
        //                             initial={{ opacity: 0 }}
        //                             animate={{ opacity: 1 }}
        //                             transition={{ duration: 3, delay: 2 }}
        //                         >
        //                             <h4 style={{color:'#fff'}}>
        //                                Profetionally
        //                             </h4>
        //                         </motion.div>
        //                     </Row>
        //                     <Row style={{marginTop:5}}>
        //                         <motion.div
        //                             initial={{ opacity: 0 }}
        //                             animate={{ opacity: 1 }}
        //                             transition={{ duration: 3,  delay: 2.5 }}
        //                         >
        //                             <p className="pAboutme" style={{textAlign: 'justify'}}>
        //                                 Coming from a Computer Science background, I pursued a bachelor's degree in Computer Science in Guatemala. 
        //                             </p>
        //                             <p className="pAboutme" style={{textAlign: 'justify'}}>
        //                                 During this time, I participated in various activities aimed at promoting women in technology.                                    </p>
        //                             <p className="pAboutme" style={{textAlign: 'justify'}}>
        //                                 I gained experience as a web developer, utilizing technologies such as PHP, SQL, and Symfony. Later on, 
        //                                 I obtained a Master's degree in Cybersecurity in Australia, where I had the opportunity to work on projects at IAG, 
        //                                 using ORBIT, React, and SQL. Additionally, I acquired skills in automation with Selenium and Cucumber.
        //                             </p>
        //                         </motion.div>
        //                     </Row>
                            
                    
                        
                        
                        
        //             </Container>
        //         </Row>
                
                
        //     </Col> 
        //     <Col sx={12} md={1} className="d-flex justify-content-center align-items-center">
                
        //         <Button outline onClick={() => scroll(1)} style={{ height: '100px' }}>
        //             <SlArrowRight />       
        //         </Button>

        //     </Col> 
            
            
        // </Row>
        
    )
}

export default AboutMe;