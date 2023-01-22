import React from 'react';

// components
import BrandLogo from '../../utils/BrandLogo';
import TableSchedule from '../../utils/TableSchedule';

function Schedule() {
    return (
        <>
            <BrandLogo />

            <div className='container'>
                <div className="row">
                    <h1 className='title-about'>Kegiatan Surabaya Dev</h1>
                    <div className="col-md">
                        <TableSchedule />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Schedule;