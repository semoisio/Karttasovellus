import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';



function Navigation() {
    return (
        <Container fluid className="p-0">
            <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Brand href="" className="pr-5">Näytetyö Hurjalle</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Navigation;