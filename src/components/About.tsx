import { Col, Container } from "reactstrap";

const About = () => {
    return(
    <>
        <h2 style={{marginTop: 20, fontWeight: 'bold'}}>About me</h2>
        <img src="/profile.png" style={{marginTop: 30, width: 200, height: 200, borderRadius: '100px'}}/>
        <Container style={{marginTop: 30, width: 600, display: 'flex', justifyContent: "center", alignContent:'center', textAlign: 'center'}}>
            <p >Hi, I am Luisa!!!, a passionate Software Developer with 2 years of experience in building dynamic and user-friendly websites. Currently, I am an IT Consultan at FDM Group. I specialize in Java, JavaScript, and React.</p>

        </Container>
        <Container row style={{marginTop: 30, display: 'flex', justifyContent: "center", alignContent:'center', textAlign: 'center'}}>
            <Col xs={12} md={6}>
                <h4>Professionally</h4>
                <Container style={{marginTop: 10, width: 600, display: 'flex', justifyContent: "center", alignContent:'center', textAlign: 'left'}}>
                    <p>Coming from a Computer Science background with a Master in Cybersecurity. I have gained experience as a web developer, utilizing technologies such as React, Java, SQL, and Symfony.Additionally, I acquired skills in automation with Selenium and Cucumber.</p>
                </Container>
            </Col>
            <Col xs={12} md={6}>
                <h4>My Goals</h4>
                <Container style={{marginTop: 10, width: 600, display: 'flex', justifyContent: "center", alignContent:'center', textAlign: 'left'}}>
                    <p>I want to be able to use technology to reach and help people with their businesses, ideas and problems. I also want people to feel safe around technology.</p>
                </Container>
            </Col>
        </Container>

    </>)
}
export default About;