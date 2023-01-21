import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import SurabayaDev from "../assets/LogoSurabayaDev.png";

function Reason() {
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
                    <div className="col-md-7">
                        <h1 className='title-about py-2'>Kenapa Harus Gabung Bersama Surabaya Dev ?</h1>
                        <p className='text-about'>Komunitas adalah tempat yang tepat untuk kamu yang suka dengan berbagi ilmu dan waktu</p>
                        {/* <img className='img-fluid'
                            src={TeamWork}
                            alt="TeamWork"
                        /> */}
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <p className='text-about'>Suka Belajar Hal Baru</p>
                            <p className='text'>Komunitas menyediakan wadah untuk bereksplorasi tanpa batas</p>
                        </div>
                        <div className="row">
                            <p className='text-about'>Berinteraksi Dengan Banyak Orang</p>
                            <p className='text'>Relasi adalah bagian utama sehingga menjadi bekal untuk koneksi karirmu di kemudian hari</p>
                        </div>
                        <div className="row">
                            <p className='text-about'>Mengasah Kemampuan</p>
                            <p className='text'>Apabila kamu belum menemukan passion skill dalam karirmu. SurabayaDev bukan hanya untuk programmer tapi untuk semua orang yang ingin berkembang di era digital</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reason;