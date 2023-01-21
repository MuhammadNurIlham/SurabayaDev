import React from 'react';
import Introduction from './Introduction';
import NavigationBar from './NavigationBar';

function ParallaxPage1() {
    return (
        <div>
            <div className='parallax header'>
                <NavigationBar />
                <Introduction />
            </div>
        </div>
    )
}

export default ParallaxPage1;