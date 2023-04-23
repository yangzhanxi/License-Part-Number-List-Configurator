import {List} from 'immutable'

import {
    VerticalScrollableContent
} from 'orion-rwc';
import React from 'react';

import {useAppSelector, useAppDispatch} from 'store/hooks';

import { LeftPanelCollapseAll } from '../leftPanelCollapseAll/LeftPanelCollapseAll';
import { LeftPanelItem } from '../leftPanel/LeftPanelItem';
import { LeftPanelGroup } from '../leftPanel/LeftPanelGroup';

import { onAllCollapseToggled, onGroupToggled, onSolutionIdsToggled, onSubGroupToggled} from './TestLibraryLeftPanelSlice';
import { leftPanelSelector } from 'components/leftPanel/Left Panel Selector';
import LeftPanelSubgroupModel from 'components/leftPanel/models/leftPanelSubGroupModel';
import { mockedGroupsItems } from 'mocks/mockedLeftPanelGroupItems';
import { LeftPanelGroupItemModel } from 'components/leftPanel/models/leftPanelGroupItemModel';

import './styles/test-lib-left-panel.css'

export const TestLibraryLeftPanel: React.FC<{
}> = () => {
    const {
        areAllGroupsExpanded,
        expandedGroupIds,
        expandedSubGroupIds,
        selectedSolutionIds} = useAppSelector(leftPanelSelector)
    const dispatch = useAppDispatch()

    // const onGroupToggled = () => {}

    const renderGroupItems = (items: List<LeftPanelGroupItemModel>) => {
        return items.map(
            item => {
                const {id, name} = item

                return (
                    <div >
                        <LeftPanelItem key={id}
                                       isSelected={selectedSolutionIds.has(id)}
                                       solutionName={name}
                                       solutionId={id}
                                       onSolutionToggled={() => dispatch(onSolutionIdsToggled(id))}/>
                    </div>
                )
            }
        )
    }

    const renderSubgroups = (groups: List<LeftPanelSubgroupModel>) => {
        return groups.map(
            group => {
                const {id, name, items} = group;
                const text = `${name} (${group.items.size})`

                return (
                        <LeftPanelGroup key={id}
                                        text={text}
                                        isExpanded={expandedSubGroupIds.has(id)}
                                        onToggle={() => dispatch(onSubGroupToggled(id))}
                                        isSecondary={true}>
                            {renderGroupItems(items)}
                        </LeftPanelGroup>
                )
            }
        )
    }

    const renderGroups = () => {
        return mockedGroupsItems.map(
            group => {
                const {id, subgroups, name, items} = group;
                // const shouldRenderSubgroups = !subgroups.isEmpty();
                const shouldRenderSubgroups = true;
                const text = `${name} (${group.subgroups.size})`;
                return (
                    <div className='test-lib-left-panel'>
                        <LeftPanelGroup key={id}
                                        text={text}
                                        isExpanded={expandedGroupIds.has(id)}
                                        onToggle={() => dispatch(onGroupToggled(id))}>
                            {shouldRenderSubgroups ? renderSubgroups(subgroups) : renderGroupItems(items)}
                        </LeftPanelGroup>
                    </div>
                );
            }
        )
    }

    const renderLeftPanelCollapseAll =
            <LeftPanelCollapseAll areExpanded={areAllGroupsExpanded}
                                  onToggle={() => dispatch(onAllCollapseToggled(!areAllGroupsExpanded))}/>

    return (
        <VerticalScrollableContent header={renderLeftPanelCollapseAll}>
            {renderGroups()}
        </VerticalScrollableContent>
    )
}