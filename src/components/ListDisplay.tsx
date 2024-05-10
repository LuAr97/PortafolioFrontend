import { Button, Col, Container, Row } from "reactstrap";

const ListDisplay = ({ list } : { list :  Array<any>}) => {
    return (<Container style={{marginTop: 50, marginLeft: 15}} >
        <Row>
            {list && list.map((item, index) => (
                <Col key={index} md={4} style={{marginTop: 10}}>
                    <Button className="listButton">{item.name}</Button>
                </Col>
            ))}
        </Row>
    </Container>);
};

export default ListDisplay;