import './styles/body.css';
import { TestLibrary } from '../testLibrary/TestLibrary';

import { PartNumBlock } from 'components/partNumBlock/PartNumBlock';
export const Body: React.FC = () => {
    return (
        <div className='page-body'>
            <TestLibrary/>
            <PartNumBlock/>
        </div>
    )
}
