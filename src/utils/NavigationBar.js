import { Container, Navbar, Nav } from 'react-bootstrap';
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
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#events">Events</Nav.Link>
                            <Nav.Link href="#programs">Programs</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;