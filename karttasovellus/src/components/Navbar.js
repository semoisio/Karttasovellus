import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';


//Sovellusken navigointi. Tähän voisilaittaa linkkejä minne tahansa.
function Navigation() {
    return (
        <Container data-testid="Navbar_Container" fluid className="p-0">
            <Navbar data-testid="Navbar" bg="dark" variant="dark" expand="sm">
                <Navbar.Brand data-testid="Navbar_Brand" className="pr-5">Näytetyö karttasovellus</Navbar.Brand>
                <Navbar.Toggle data-testid="Navbar_Toggle" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigation;