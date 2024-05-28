import { useState } from "react";
import { Button, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler } from "reactstrap";
import { IoMdHome } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";

const NavbarComponent = ({ scroll } : any) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return(
        <Nav className="navbar-1" dark sticky="true" navbar>
            <NavbarText>
                <Button className="hide" onClick={() => scroll('landPage')}><IoMdHome /></Button>
            </NavbarText>
            <NavbarText>
                <Button className="hide" onClick={() => scroll('aboutme')}><RiContactsFill /></Button>
            </NavbarText>
            <NavbarText>
                <Button className="hide" onClick={() => scroll('projects')}><GrProjects /></Button>
            </NavbarText>
            <NavbarText>
                <Button className="hide" onClick={() => scroll('contactme')}><MdContactPhone /></Button>
            </NavbarText>
            
        </Nav>
   )
}

export default NavbarComponent;