import{
    Filter,
    FilterItem,
    SearchBar,
} from 'orion-rwc';
import React from 'react';

import {useAppSelector, useAppDispatch} from 'store/hooks';
import { leftPanelSelector } from 'components/leftPanel/Left Panel Selector';
import { TestLibraryLeftPanel } from 'components/testLibraryLeftPanel/TestLibraryLeftPanel';
import { onSearchStringChanged } from 'components/testLibraryLeftPanel/TestLibraryLeftPanelSlice'
import './styles/test-lib.css'


export const TestLibrary: React.FC = () => {
    const {searchString} = useAppSelector(leftPanelSelector);
    const dispatch = useAppDispatch();
    const searchChanged = (value: string) => {
        dispatch(onSearchStringChanged(value))
    }

    const renderSearchBar = (
        <div className='search-bar'>
            <SearchBar value={searchString}
                       placeholder={'Search by Name'}
                       isClearIcon={true}
                       isInputRounded={true}
                       onValueChanged={searchChanged}/>
        </div>
    )

    const items: FilterItem[] = [];
    const change = () => {}
    const renderFilter = (
        <div className='filter'>
            <Filter maxHeight='500px'
                    items={items}
                    onItemClick={change}/>
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
                Solutions
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