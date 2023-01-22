import React from 'react';

// assets
import TeamWork from "../../assets/TeamMeeting.png";
import BrandLogo from '../../utils/BrandLogo';
import TableVisiMisi from '../../utils/TableVisiMisi';

function VisiMisi() {
    return (
        <>
            <BrandLogo />

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className='title-about'>Visi & Misi</h1>
                        <p className='text-about'>Surabaya Dev bertujuan menjadi wadah talenta teknologi dengan memanfaatkan potensinya untuk meningkatkan skill tech di bidang programming maupun digital teknologi agar dapat saling bersinergi berkolaborasi.</p>
                    </div>
                    <div className="col-md-4">
                        <img className='img-fluid mx-auto d-block images-content-visimisi'
                            src={TeamWork}
                            alt="TeamWork"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <TableVisiMisi />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisiMisi;