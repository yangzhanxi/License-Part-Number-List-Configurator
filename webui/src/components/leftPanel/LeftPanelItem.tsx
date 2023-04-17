import React from 'react'

import {
    Checkbox,
    CheckboxParams
} from 'orion-rwc'

import './styles/left-panel-item.css'

export const LeftPanelItem: React.FC<{
    solutionName: string,
    solutionId: string,
    isSelected: boolean,
    onSolutionToggled: (id: string) => void
}> = ({solutionName, isSelected, solutionId, onSolutionToggled})  => {
    // const [solutionName, setCheckboxState] = React.useState(CheckboxParams.State.UNCHECKED);

    const renderCheckbox =
        <div className='item-checkbox'>
            <Checkbox checkboxState={isSelected? CheckboxParams.State.CHECKED : CheckboxParams.State.UNCHECKED}
                      type={CheckboxParams.Type.SECONDARY}
                      onChecked={() => onSolutionToggled(solutionId)}
                      onUnchecked={() => onSolutionToggled(solutionId)}/>
        </div>

    return (
        <div className='left-panel-item'>
            {renderCheckbox}
            <div className='item-name'>
                {solutionName}
            </div>
        </div>
    )
}