import React from 'react';
import { Navbar } from 'react-bootstrap';
import SurabayaDev from "../assets/LogoSurabayaDev.png";

function ForFooter() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
                <div className="container">
                    <p className="navbar-text mx-auto text-center created-contact">
                        Created with coffee &copy;Muhammad Nur Ilham<br></br>for administrator registration <img
                            src={SurabayaDev}
                            alt="SurabayaDev"
                            width="100"
                            height="30"
                            className='images-brands'
                        />
                    </p>
                </div>
            </Navbar>
        </>
    )
}

export default ForFooter;