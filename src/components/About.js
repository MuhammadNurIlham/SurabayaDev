import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import SurabayaDev from "../assets/LogoSurabayaDev.png";
import Laptop from "../assets/Laptop.png"
// import TimeLine from '../utils/TimeLine'

function About() {
    return (
        <>
            <Navbar bg="none" variant="light" className='pb-5'>
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

            <div className='container py-5'>
                {/* <TimeLine /> */}
                <div className="row">
                    <div className="col-md-7">
                        <h1 className='title-about py-3'>Awal Mula Surabaya Dev</h1>
                        <p className='text-about py-2'>Surabaya Dev lahir karena tidak adanya wadah belajar untuk para programmer yang ingin terus berkembang untuk meningkatkan kemampuan teknikal skill.</p>
                        <img className='float-end'
                            src={Laptop}
                            alt="Laptop"
                            width="250"
                            height="150"
                        />
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <p className='text-about'>Muncul Pada<br></br>2014</p>
                        </div>
                        <div className="row">
                            <p className='text-about'>Semakin Berkembang Kegiatan<br></br>2017</p>
                        </div>
                        <div className="row">
                            <p className='text-about'>Tim Surabaya Dev Generasi 1.0<br></br>2018</p>
                        </div>
                        <div className="row">
                            <p className='text-about'>Tim Surabaya Dev generasi 2.0 Online Version<br></br>2020</p>
                        </div>
                        <div className="row">
                            <p className='text-about'>Generasi 3.0 kamu masuk sejarah di tahun ini<br></br>2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About