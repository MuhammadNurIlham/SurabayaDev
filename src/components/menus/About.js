import React from 'react';
import BrandLogo from '../../utils/BrandLogo';

// assets
import Laptop from "../../assets/Laptop.png";
import TableGeneration from '../../utils/TableGeneration';

function About() {
    return (
        <>
            <BrandLogo />

            <div className='container py-2'>
                {/* <TimeLine /> */}
                <div className="row">
                    <div className="col-md-7">
                        <h1 className='title-about'>Awal Mula Surabaya Dev</h1>
                        <p className='text-about py-2'>Surabaya Dev lahir karena tidak adanya wadah belajar untuk para programmer yang ingin terus berkembang untuk meningkatkan kemampuan teknikal skill.</p>

                    </div>
                    <div className="col-md-5">
                        <TableGeneration />
                        <img className='img-fluid float-end images-about'
                            src={Laptop}
                            alt="Laptop"
                            width="250"
                            height="150"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About