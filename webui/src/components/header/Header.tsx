import './styles/header.css'

export const Header: React.FC = () => {
    const leftItem =
        <div className='page-header-left-item'>
            <span>
                License Configurator
            </span>
        </div>

    return (
        <div className='page-header'>
            {leftItem}
        </div>
    )
}