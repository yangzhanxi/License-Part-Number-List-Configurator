import React from 'react';
import {List} from 'immutable';

import {
    Button,
    ButtonParams,
    TableNativeRow,
    ToggleButton,
    ToggleButtonItem
} from 'orion-rwc'

import {useAppSelector, useAppDispatch} from 'store/hooks';
import { PartNumTable } from 'components/PartNumTable/PartNumTable';
// import { PartNumTab } from 'components/partNumTab/PartNumTab';
import { leftPanelSelector } from 'components/leftPanel/Left Panel Selector';
import { generateTableRows } from 'components/PartNumTable/PratNumTableUtils';
import {onClearSolutionIds} from 'components/testLibraryLeftPanel/TestLibraryLeftPanelSlice';

import './styles/part-number-block.css';

export const PartNumBlock: React.FC = () => {
    const {selectedSolutionIds} = useAppSelector(leftPanelSelector);
    const [partNums, setPartNums] = React.useState<TableNativeRow[]>([])
    // const [bundlePartNums, setBundlePartNums] = React.useState<TableNativeRow[]>([])
    const dispatch = useAppDispatch()

    const onGenerateClick = (ids: Set<string>) => {
        setPartNums(generateTableRows(ids));
        // setBundlePartNums(generateBundleRows(ids));
    }

    const onClearClick = () => {
        setPartNums([]);
        // setBundlePartNums([]);
        dispatch(onClearSolutionIds());
    }

    const onImport = () => {

    }

    const onExport = () => {

    }

    const headerLeft =
        <div className='part-number-block-header-left'>
            <span>
                {/* Part Numbers */}
            </span>
        </div>

const items = List.of<ToggleButtonItem>(
    {
        id: 'flexera',
        text: 'Flexera',
        isActive: true,
        onClick: () => {}
    },
    {
        id: 'aion',
        text: 'AION',
        isActive: false,
        isDisabled: true,
        onClick: () => {}
    },
);
    const toggle = <ToggleButton items={items}/>

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
                <Button text='Import'
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
            {toggle}
            <div className='part-number-block-header-right'>
                {buttonPanel}
            </div>
        </div>

    return (
        <div className='part-number-block'>
            {header}
            <PartNumTable rows={partNums}/>
        </div>
    )
}
