import React from 'react';

// assets
import BrandLogo from '../../utils/BrandLogo';
import TableReason from '../../utils/TableReason';

function Reason() {
    return (
        <>
            <BrandLogo />

            <div className='container'>
                <div className="row">
                    <div className="col-md-7">
                        <h1 className='title-reason'>Kenapa Harus Gabung Bersama Surabaya Dev ?</h1>
                        <p className='text-reason'>Komunitas adalah tempat yang tepat untuk kamu yang suka dengan berbagi ilmu dan waktu</p>
                        {/* <img className='img-fluid'
                            src={TeamWork}
                            alt="TeamWork"
                        /> */}
                    </div>
                    <div className="col-md-5">
                        <TableReason />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reason;