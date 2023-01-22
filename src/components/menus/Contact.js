import React from 'react';
import BrandLogo from '../../utils/BrandLogo';

// assets
import SocialMedia from "../../assets/Social.png"
import ForFooter from '../../utils/ForFooter';

function Contact() {
    return (
        <>
            <BrandLogo />

            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <img className='mx-auto d-block images-contact'
                            src={SocialMedia}
                            alt="SocialMedia"
                            width="400"
                            height="400"
                        />
                    </div>
                    <div className="col-md-6">
                        <h1 className='title-contact py-2'>Tanya Surabaya Dev</h1>
                        <p className='text-contact'>
                            <a href="mailto:surabayadev@gmail.com" target="blank">surabayadev@gmail.com</a>
                        </p>
                        <p className='text-contact'>
                            <a href="https://www.instagram.com/surabayadev/" target="blank">@surabayadev</a></p>
                        <p className='text-contact'>
                            <a href="https://t.me/surabayadev" target="blank">t.me/surabayadev</a>
                        </p>
                    </div>
                </div>
            </div>

            <ForFooter />
        </>
    )
}

export default Contact;