import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import SurabayaDev from "../assets/LogoSurabayaDev.png";

function BrandLogo() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="none" variant="light" className='pb-3 brand-logo'>
                <Container>
                    <Navbar.Brand href="#home">
                        {/* <img
                            src={SurabayaDev}
                            alt="SurabayaDev"
                            // className="img-fluid"
                            className="img-thumbnail"
                        /> */}
                        <img
                            src={SurabayaDev}
                            alt="SurabayaDev"
                            width="150"
                            height="50"
                            className='images-brand'
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default BrandLogo;