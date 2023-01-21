import React from 'react';
import Coding from "../assets/Coding.png";

function Introduction() {
    return (
        <>
            <div className='container py-5'>
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="title-intro">Hello Sobat Dev!</h1>
                        <p className="text-intro">Selamat datang di kumpulan orang yang suka dengan update teknologi, belajar, berbagi dan suka berkontribusi.</p>
                    </div>
                    <div className="col-md-5 right-side">
                        <img src={Coding} alt="coding" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction;