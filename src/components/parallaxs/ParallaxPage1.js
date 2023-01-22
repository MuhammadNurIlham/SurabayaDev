import React from 'react';
import NavigationBar from '../../utils/NavigationBar';
import Introduction from '../menus/Introduction';

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