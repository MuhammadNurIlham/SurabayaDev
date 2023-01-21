import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import SurabayaDev from "../assets/LogoSurabayaDev.png";
import ScheduleEvents from "../assets/Meeting.png";
import Computer from "../assets/Computer.png";

function Schedule() {
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
            <div className='container'>
                <div className="row">
                    <h1 className='title-about py-3'>Kegiatan Surabaya Dev</h1>
                    <div className="col-md-8 pt-3">
                        <p className='text-about'>Surabaya Dev bertujuan menjadi wadah talenta teknologi dengan memanfaatkan potensinya untuk meningkatkan skill tech di bidang programming maupun digital teknologi agar dapat saling bersinergi berkolaborasi.</p>
                        <img className='float-end'
                            src={Computer}
                            alt="Computer"
                            width="200"
                            height="200"
                        />
                    </div>
                    <div className="col-md-4">
                        <img className='img-fluid'
                            src={ScheduleEvents}
                            alt="ScheduleEvents"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Schedule;