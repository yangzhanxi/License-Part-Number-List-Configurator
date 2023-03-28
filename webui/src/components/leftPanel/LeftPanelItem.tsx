import React from 'react'

import {
    Checkbox,
    CheckboxParams
} from 'orion-rwc'

import './styles/left-panel-item.css'

export const LeftPanelItem: React.FC<{
    testName: string,
    isSelected: boolean
}> = ({testName, isSelected})  => {
    const [checkboxState, setCheckboxState] = React.useState(CheckboxParams.State.UNCHECKED);

    const renderCheckbox =
        <div className='item-checkbox'>
            <Checkbox checkboxState={checkboxState}
                      type={CheckboxParams.Type.SECONDARY}
                      onChecked={() => setCheckboxState(CheckboxParams.State.CHECKED)}
                      onUnchecked={() => setCheckboxState(CheckboxParams.State.UNCHECKED)}/>
        </div>

    return (
        <div className='left-panel-item'>
            {renderCheckbox}
            <div className='item-name'>
                {testName}
            </div>
        </div>
    )
}