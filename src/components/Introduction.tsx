import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FaDownload } from "react-icons/fa6";

const Introduction = ({ scroll } : any) => {
    
    return(<>
        <ParallaxLayer offset={0} speed={0.5} >
            <div className="animation_layer parallax" id="logo">
                
            </div> 
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5} sticky={{start: 0, end: 2}} style={{ justifyContent: 'flex-start' }}>  
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
        </ParallaxLayer>
    </>);
};

export default Introduction;