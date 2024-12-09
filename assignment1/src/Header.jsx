//Task 1

import React from 'react';

function Header() {
    const imageSize = {
        height: '500px',
        width: 'auto'
    }
    const headerImg = <img src="/ironMan.jpg" style={imageSize} alt="Picture of Iron Man from the Marvel Cinematic Universe (MCU)" />;
    const headerName = <h1>Iron Man</h1>;
    const fullHeader = <header>
        {headerImg}
        {headerName}
    </header>

    return fullHeader;
}

export default Header;