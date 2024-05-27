import { Button, Card, CardFooter, CardText, CardTitle, Container } from "reactstrap";

const ProjectCard = ({ item } : { item : any }) => {
    console.log(item.img)
    return(
        <Container>
            <Card className="my-5 mx-auto video-card" style={{height: 'auto'}}>
                <div className="video-wrapper" style={{ width: 350, height: 50 }}>
                    <video
                        className="video-content"
                        controls={false}
                        autoPlay={true}
                        loop={true}
                        muted={true}
                    >
                        <source src={item.img} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
                <CardFooter>
                    <Button className="btnDarkProject" onClick={() => window.open(item.gitUrl, '_blank')}>Code</Button>
                </CardFooter>
            </Card>
        </Container>
    );
}

export default ProjectCard;