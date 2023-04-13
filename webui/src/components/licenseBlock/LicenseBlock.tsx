import React from 'react';

import {
    Button,
    ButtonParams,
    ToggleButton,

} from 'orion-rwc'

import { LicenseTable } from 'components/licenseTable/LicenseTable';
import './styles/license-block.css'

export const LicenseBlock: React.FC = () => {
    // const [activeButton, setActiveButton] = React.useState('Show Licenses');

    const headerLeft =
        <div className='license-block-header-left'>
            <span>
                Licenses
            </span>
        </div>

    // const items = ['Show  Licenses', 'Show Avaliable Bundle'].map(
    //     text => ({
    //         text,
    //         id: text,
    //         isActive: activeButton === text,
    //         onClick: () => setActiveButton(text),
    //     }),
    // );

    const buttonPanel =
        <div className='license-block-button-panel'>
            {/* <div>
                <ToggleButton items={items}/>
            </div> */}
            <div id='export' className='license-block-button'>
                <Button text='Export'
                        size={ButtonParams.Size.MEDIUM}
                        isFullWidth={true}
                        onClick={()=>{console.log(1)}}/>
            </div>
        </div>

    const header =
        <div className='license-block-header'>
            {headerLeft}
            <div className='license-block-header-right'>
                {buttonPanel}
            </div>
        </div>
    return (
        <div className='license-block'>
            {header}
            <LicenseTable/>
        </div>
    )
}
