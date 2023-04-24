import React from 'react';

import spirentLogo from 'icons/Spirent_Logo.svg';
import './styles/footer.scss';

export const Footer: React.FC = () => {
    const renderLogo =
        <div className='spirent-logo'>
            <img className='logo' alt='img' src={spirentLogo}/>
        </div>

    const renderText = 
        <div className='copyrignt-text'>
            <span>
                ©
                2023 
                Spirent Communications, Inc. All rights reserved.
            </span>
        </div>

    const renderVer =
        <div className='version'>
            <span>
                Ver 1.0.0
            </span>
        </div>

    return (
        <div className='copyright-bar'>
            {renderLogo}
            {renderText}
            {renderVer}
        </div>
    )
}