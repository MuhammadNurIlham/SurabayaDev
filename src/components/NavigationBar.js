import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SurabayaDev from "../assets/LogoSurabayaDev.png";

function NavigationBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="none" variant="light" className='pb-5'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={SurabayaDev}
                            alt="SurabayaDev"
                            width="150"
                            height="50"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;