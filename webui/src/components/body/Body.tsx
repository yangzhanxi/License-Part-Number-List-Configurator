import './styles/body.css';
import { TestLibrary } from '../testLibrary/TestLibrary';
import { LicenseBlock } from '../licenseBlock/LicenseBlock';
export const Body: React.FC = () => {
    return (
        <div className='page-body'>
            <TestLibrary/>
            <LicenseBlock/>
        </div>
    )
}
