import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";
import NavbarComponent from "./NavbarComponent";


const Introduction = ({ scroll } : any) => {
    return(
    <>
    <NavbarComponent scroll={scroll}/>
    <Row style={{margin: 0}}>
        <Col xs={12} md={6} style={{width: '700px'}}/>
        <Col xs={12} md={6} style={{width: '700px'}}>
            <Container >
                <div >
                    <h1 style={{fontSize: 70}}>Luisa Fernanda</h1>
                    <h1 style={{fontSize: 70}}>ARBOLEDA ZAPATA</h1>
                    <h4 className="subtitle" style={{marginTop: 50, fontSize: 30}}>Scroll down and step into my world of code! </h4>
                </div>
                <div style={{marginTop: 50,alignContent: 'center', justifyContent: 'center'}}>
                    <Row>
                        <Col xs={12} md={4}> 
                            <motion.div
                                className="enterDiv"
                                whileTap={{ scale: 0.97 }}
                            >
                                <Button className="enter" onClick={() => scroll('projects')}>Let's see</Button>
                            </motion.div>
                        </Col>
                        <Col xs={12} md={4}> 
                            <motion.div
                                className="contactDiv"
                                whileTap={{ scale: 0.97 }}
                            >
                                <Button className="contact" onClick={() => scroll('contactme')}>Contact me</Button>
                            </motion.div>
                        </Col>
                        <Col xs={12} md={4}> 
                            <motion.div
                                className="aboutmeDiv"
                                whileTap={{ scale: 0.97 }}
                            >
                                <Button className="btnDark" onClick={() => scroll('aboutme')}>About me</Button>
                            </motion.div>
                        </Col>
                        {/* <Col xs={12} md={3}> 
                            <motion.div
                                className="contactDiv"
                                whileTap={{ scale: 0.97 }}
                            >
                                <Button className="contact" onClick={download}>Download CV</Button>
                            </motion.div>
                        </Col> */}
                    </Row>
                    
                    
                </div>
                
            </Container>
        </Col>
    </Row>
    </>
        /* <div className="animation_layer parallax" id="logo">
                
        </div>  */
        /* <ParallaxLayer offset={0} speed={0.5} sticky={{start: 0, end: 2}} style={{ justifyContent: 'flex-start' }}>  
            <div className="animation_layer parallax">
            <Row>
                <Col>
                    <Button className="transparent" size="lg" outline onClick={() => scroll(2)}>About me</Button>
                </Col>
                <Col>
                    <Button className="transparent" size="lg" outline onClick={() => scroll(1)}>Projects & Skills</Button>
                </Col>
            </Row>
                
            </div> 
        </ParallaxLayer> */
    );
};

export default Introduction;