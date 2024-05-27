import { useState } from "react";
import { Button, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler } from "reactstrap";

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return(
        <Navbar className="navbar-1" dark sticky="true">
            <NavbarText>
                <Button className="btnDark">Skills</Button>
                <Button className="btnDark">Projects</Button>
            </NavbarText>
            
        </Navbar>
   )
}

export default NavbarComponent;