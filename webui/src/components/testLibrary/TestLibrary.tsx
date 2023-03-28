import{
    Filter,
    FilterItem,
    SearchBar,
} from 'orion-rwc';
import React from 'react';
import { TestLibraryLeftPanel } from 'components/testLibraryLeftPanel/TestLibraryLeftPanel';
import './styles/test-lib.css'


export const TestLibrary: React.FC = () => {
    const onSearchChanged = () => {
        console.log('on changed')
    }

    const renderSearchBar = (
        <div className='search-bar'>
            <SearchBar placeholder={'Seach Test by Name'}
                       isClearIcon={true}
                       isInputRounded={true}
                       onValueChanged={onSearchChanged}/>
        </div>
    )

    const items: FilterItem[] = [];

    const renderFilter = (
        <div className='filter'>
            <Filter maxHeight='500px'
                    items={items}
                    onItemClick={onSearchChanged}/>
        </div>
    )

    const renderControlPanel = (
        <div className='control-panel'>
            {renderSearchBar}
            {renderFilter}
        </div>
    )

    const renderTitle = (
        <div className='test-lib-title'>
            <span>
                Test Library
            </span>
        </div>
    )

    return (
        <div className='test-lib'>
            {renderTitle}
            {renderControlPanel}
            <TestLibraryLeftPanel/>
        </div>
    )
}