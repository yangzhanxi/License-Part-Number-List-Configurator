import {
    Button,
    ButtonParams } from 'orion-rwc';

import './styles/header.css'

export const Header: React.FC = () => {
    const leftItem =
        <div className='page-header-left-item'>
            <span>
                License PN List Configurator
            </span>
        </div>

    const adminLoginButton =
        <div className='page-header-admin-login'>
            <Button text='Admin Login'
                        size={ButtonParams.Size.MEDIUM}
                        theme={ButtonParams.Theme.WARNED}
                        isFullWidth={false}
                        onClick={()=>{}}/>
        </div>

    return (
        <div className='page-header'>
            {leftItem}
            {adminLoginButton}
        </div>
    )
}