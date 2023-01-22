import React from 'react'

function TableGeneration() {
    return (
        <>
            <div className='table-responsive'>
                <table className="table table-borderless table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className='title-table-generation'>Muncul Pada</th>
                            <th scope="col" className='text-table-generation'>2014</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col" className='title-table-generation'>Semakin Berkembang Kegiatan</th>
                            <th scope="col" className='text-table-generation'>2017</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col" className='title-table-generation'>Tim Surabaya Dev Generasi 1.0</th>
                            <th scope="col" className='text-table-generation'>2018</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col" className='title-table-generation'>Tim Surabaya Dev Generasi 2.0 Online Version</th>
                            <th scope="col" className='text-table-generation'>2020</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col" className='title-table-generation'>Generasi 3.0 kamu masuk sejarah di tahun ini</th>
                            <th scope="col" className='text-table-generation'>2023</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}

export default TableGeneration;