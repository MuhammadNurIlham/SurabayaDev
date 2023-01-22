import React from 'react'

function TableSchedule() {
    return (
        <>
            <div className='table-responsive'>
                <table className="table table-borderless table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className='title-table-schedule'>01</th>
                            <th scope="col" className='title-table-schedule'>Meetup (Seminar/Webinar)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td className='text-table-schedule'>Kegiatan bersama topik teknologi & programming secara online maupun offline.</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className='title-table-schedule'>02</th>
                            <th scope="col" className='title-table-schedule'>Upgrading Skill (Workshop)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td className='text-table-schedule'>Pelatihan Internal pengurus berupa workshop untuk pengembangan diri seputar teknikal programming.</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th scope="col" className='title-table-schedule'>03</th>
                            <th scope="col" className='title-table-schedule'>Kolaborasi Komunitas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td className='text-table-schedule'>Sinergi antar komunitas guna untuk mendukung kegiatan komunitas lokal teknologi di Indonesia.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableSchedule;