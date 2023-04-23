import React, { useState } from 'react';

import {
    Button,
    ButtonParams,
    TableNativeRow
} from 'orion-rwc'

import {useAppSelector, useAppDispatch} from 'store/hooks';
import { PartNumTab } from 'components/partNumTab/PartNumTab';
import { areAllGroupsExpandedSelector } from 'components/leftPanelCollapseAll/LeftPanelCollapseAllSelector';
import { generateBundleRows, generateTableRows } from 'components/PartNumTable/PratNumTableUtils';
import {onClearSolutionIds} from 'components/testLibraryLeftPanel/TestLibraryLeftPanelSlice';

import './styles/part-number-block.css'

export const PartNumBlock: React.FC = () => {
    const {selectedSolutionIds} = useAppSelector(areAllGroupsExpandedSelector);
    const [partNums, setPartNums] = React.useState<TableNativeRow[]>([])
    const [bundlePartNums, setBundlePartNums] = React.useState<TableNativeRow[]>([])
    const dispatch = useAppDispatch()
    const onGenerateClick = (ids: Set<string>) => {
        setPartNums(generateTableRows(ids));
        setBundlePartNums(generateBundleRows(ids));
    }

    const onClearClick = () => {
        setPartNums([]);
        setBundlePartNums([]);
        dispatch(onClearSolutionIds());
    }

    const onImport = () => {

    }

    const onExport = () => {

    }

    const headerLeft =
        <div className='part-number-block-header-left'>
            <span>
                Part Numbers
            </span>
        </div>

    const buttonPanel =
        <div className='part-number-block-button-panel'>
            <div id='generate' className='part-number-block-button'>
                <Button text='Generate'
                        size={ButtonParams.Size.MEDIUM}
                        isFullWidth={true}
                        onClick={()=>{onGenerateClick(selectedSolutionIds)}}/>
            </div>
            <div id='clear' className='part-number-block-button'>
                <Button text='Clear'
                        size={ButtonParams.Size.MEDIUM}
                        isFullWidth={true}
                        onClick={()=>{onClearClick()}}/>
            </div>
            <div id='import' className='part-number-block-button'>
                <Button text='Impor'
                        size={ButtonParams.Size.MEDIUM}
                        isFullWidth={true}
                        onClick={()=>{onImport()}}/>
            </div>
            <div id='export' className='part-number-block-button'>
                <Button text='Export'
                        size={ButtonParams.Size.MEDIUM}
                        isFullWidth={true}
                        onClick={()=>{onExport()}}/>
            </div>
        </div>

    const header =
        <div className='part-number-block-header'>
            {headerLeft}
            <div className='part-number-block-header-right'>
                {buttonPanel}
            </div>
        </div>

    return (
        <div className='part-number-block'>
            {header}
            <PartNumTab partNumRows={partNums}
                        bundleRows={bundlePartNums}/>
        </div>
    )
}
