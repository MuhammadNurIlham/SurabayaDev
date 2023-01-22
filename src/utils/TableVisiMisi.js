import React from 'react'

function TableVisiMisi() {
    return (
        <>
            <div className='table-responsive'>
                <table className="table table-borderless table-hover">
                    <thead>
                        <tr className='title-table-visimisi'>
                            <th scope="col">Wadah Belajar</th>
                            <th scope="col">Koneksi</th>
                            <th scope="col">Berbagi Ilmu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-table-visimisi'>Menjadi wadah belajar pegiat IT untuk bisa terus update mengenai tech industri saat ini.</td>
                            <td className='text-table-visimisi'>Memperluas relasi melalui komunitas untuk menjalin kebermanfaatan.</td>
                            <td className='text-table-visimisi'>Komunitas adalah wadah yang tepat untuk bisa saling berbagi ilmu, pengalaman maupun wawasan, tentang update teknologi.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableVisiMisi;