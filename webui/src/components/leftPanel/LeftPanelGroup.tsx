import React, {PureComponent} from 'react';
import {CollapsibleContent} from 'orion-rwc';
import SVG from 'react-inlinesvg';


import './styles/left-panel-group.css';

import CollapsedIcon from '../../icons/Collapsed.svg'
import ExpandedIcon from '../../icons/Expanded.svg'

export const LeftPanelGroup: React.FC<{
    children: React.ReactNode;
    isExpanded: boolean;
    text: string;
    isSecondary?: boolean;

    onToggle: () => void;
}> = ({children, isExpanded, text, isSecondary=false, onToggle}) => {

    const renderContent =
        <div>
            {children}
        </div>

    const collapser =
        <SVG className='left-panel-expand-icon'
             src={isExpanded ? CollapsedIcon : ExpandedIcon}/>;

    const renderHeader =
        <div className={isSecondary ? 'left-panel-header-secondary' : 'left-panel-header'}>
            <div className='left-panel-header-label'>
                {text}
            </div>

            {collapser}
        </div>

    return (
        <CollapsibleContent className='left-panel-root'
                            isCollapsed={!isExpanded}
                            header={renderHeader}
                            shouldRenderCollapser={false}
                            isHeaderSticky={true}
                            onToggle={onToggle}>
            {renderContent}
        </CollapsibleContent>
    )
}