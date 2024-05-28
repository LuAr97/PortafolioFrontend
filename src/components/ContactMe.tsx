import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

import { Button, Container } from "reactstrap";
import MapComponent from "./MapComponent";

const ContactMe = () => {
    const whatsappWebsite = () => {
        window.open('https://wa.me/61433665185', '_blank');
    }
    const emailWebsite = () => {
        window.open('mailto:luisa.arbol97@gmail.com', '_blank');
    }
    return(
        <>
            <h2 style={{marginTop: 30}}>Contact Me</h2>
            <Container style={{marginTop: 30, width: 600, display: 'flex', justifyContent: "center", alignContent:'center'}}>
                <p>I can be contacted throught the following options:</p>
            </Container>
            <Container style={{marginTop: 20, width: 600, display: 'flex', justifyContent: "center", alignContent:'center'}}>
                <Button size='sm' className="whatsapp" onClick={whatsappWebsite}><FaWhatsapp />{` Send Message`}</Button>
            </Container>
            <Container style={{marginTop: 10, width: 600, display: 'flex', justifyContent: "center", alignContent:'center'}}>
                <Button size='sm' className="gmail" onClick={emailWebsite}><SiGmail className="gmailIcon"/>{`  Send an Email`}</Button>
            </Container>

            <Container style={{marginTop: 30, width: 600, display: 'flex', justifyContent: "center", alignContent:'center'}}>
                <p>or you can find me on <a href="https://www.google.com/maps/place/80+Roberts+St,+West+Footscray+VIC+3012/@-37.8077499,144.8674958,16z/data=!3m1!4b1!4m6!3m5!1s0x6ad660ada1f91335:0xfa329a3253e27672!8m2!3d-37.8077542!4d144.8700707!16s%2Fg%2F11c1yj6__f?entry=ttuhttps://maps.app.goo.gl/ZKSpKUPRegmvuMGT9" target='_blank'>80 Roberts street, West Footscray 3012</a></p>
            </Container>
        </>
    )
}

export default ContactMe;