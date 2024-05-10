import { Badge, Button, Card, CardHeader, CardText, CardTitle, Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import SkillDisplay from "./SkillDisplay";
import ProjectDisplay from "./ProjectDisplay";
import { useState } from "react";
const CardsDisplay = ({ list, type } : { list :  Array<any>, type : String}) => {

    const data = () => {
        return list.map((item)=>{
            const newItem = {
                id : item.id,
                content: type === 'skill' ? <SkillDisplay item={item} /> : <ProjectDisplay item={item} />
            }
        })
    }

    return (
        
        <Container style={{marginTop:type === 'project'? 100: 50, marginLeft: 15, alignItems: "center", height: '600px', overflowY: 'scroll'}} >
            <Row>
                {list && list.map((item, index) => (
                    <Col key={index} md={type==='project'? 6 : 4} style={{marginTop: 10, display: type==='project' ? 'flex': 'block', justifyContent: 'center'}}>
                        
                            
                            {type === 'skill' && <SkillDisplay item={item} />}
                            
                            {type === 'project' && <ProjectDisplay item={item} />}
                    
                        {/* <Button className="listButton">{item.name}</Button> */}
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CardsDisplay;