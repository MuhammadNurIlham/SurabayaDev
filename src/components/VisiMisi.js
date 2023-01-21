import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import SurabayaDev from "../assets/LogoSurabayaDev.png";
// import TeamWork from "../assets/image-3.png";
import TeamWork from "../assets/TeamMeeting.png";

function VisiMisi() {
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
            <div className="container pt-2">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className='title-about py-2'>Visi & Misi</h1>
                        <p className='text-about'>Surabaya Dev bertujuan menjadi wadah talenta teknologi dengan memanfaatkan potensinya untuk meningkatkan skill tech di bidang programming maupun digital teknologi agar dapat saling bersinergi berkolaborasi.</p>
                    </div>
                    <div className="col-md-4">
                        <img className='img-fluid'
                            src={TeamWork}
                            alt="TeamWork"
                        />
                    </div>
                </div>
                <div className="row pt-1">
                    <div className="col-md-4">
                        <p className='text-about py-2'>
                            Wadah Belajar<hr />
                            Menjadi Wadah belajar pegiat IT untuk bisa terus update mengenai tech industri saat ini.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p className='text-about py-2'>
                            Koneksi<hr />
                            Memperluas relasi melalui komunitas untuk menjalin kebermanfaatan
                        </p>
                    </div>
                    <div className="col-md-4">
                        <p className='text-about py-2'>
                            Berbagi Ilmu<hr />
                            Komunitas adalah wadah yang tepat untuk bisa saling berbagi ilmu, pengalaman maupun wawasan, tentang update teknologi
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisiMisi;