import React from 'react';
import SVG from 'react-inlinesvg';

import { CollapsibleContent } from "orion-rwc";

import CollapsedIcon from 'icons/Collapsed.svg'
import ExpandedIcon from 'icons/Expanded.svg'
import './styles/left-panel-collapse-all.css'

export const LeftPanelCollapseAll: React.FC<{
    areExpanded: boolean;

    onToggle: () => void;
}> = ({areExpanded, onToggle}) => {
    const leftLable = areExpanded? 'Collapse All': 'Expand All'
    const collapser = <SVG className='expand-icon'
                           src={areExpanded ? CollapsedIcon : ExpandedIcon}/>;

    const renderHeader = () => {
        return (
            <div className='collapse-all-header'>
                <div className='collapse-all-label'>
                    {leftLable}
                </div>

                {collapser}
            </div>
        );
    }

    return <CollapsibleContent className='collapse-all'
                               header={renderHeader()}
                               shouldRenderCollapser={false}
                               isCollapsed={!areExpanded}
                               onToggle={onToggle}/>
    }
