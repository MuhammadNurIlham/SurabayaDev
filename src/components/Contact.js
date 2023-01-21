import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import SurabayaDev from "../assets/LogoSurabayaDev.png";
import SocialMedia from "../assets/Social.png"

function Contact() {
    return (
        <>
            <Navbar bg="none" variant="light" className='py-2'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={SurabayaDev}
                            alt="SurabayaDev"
                            width="150"
                            height="50"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <div className='container'>
                <div className="row">
                    <div className="col-md-7">
                        <img className='img-fluid'
                            src={SocialMedia}
                            alt="SocialMedia"
                        />
                    </div>
                    <div className="col-md-5">
                        <h1 className='title-about py-3'>Tanya Surabaya Dev</h1>
                        <p className='text-about'>
                            <a href="mailto:surabayadev@gmail.com" target="blank">surabayadev@gmail.com</a>
                        </p>
                        <p className='text-about'>
                            <a href="https://www.instagram.com/surabayadev/" target="blank">@surabayadev</a></p>
                        <p className='text-about'>
                            <a href="https://t.me/surabayadev" target="blank">t.me/surabayadev</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;