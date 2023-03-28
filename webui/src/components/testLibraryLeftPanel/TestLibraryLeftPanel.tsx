import {List} from 'immutable'

import {
    VerticalScrollableContent
} from 'orion-rwc';
import React from 'react';

import {useAppSelector, useAppDispatch} from 'store/hooks';

import { LeftPanelCollapseAll } from '../leftPanelCollapseAll/LeftPanelCollapseAll';
import { LeftPanelItem } from '../leftPanel/LeftPanelItem';
import { LeftPanelGroup } from '../leftPanel/LeftPanelGroup';

import { onAllCollapseToggled } from './TestLibraryLeftPanelSlice';
import { areAllGroupsExpandedSelector } from 'components/leftPanelCollapseAll/LeftPanelCollapseAllSelector';
import LeftPanelGroupModel from 'components/leftPanel/models/leftPanelGroupModel';
import LeftPanelSubgroupModel from 'components/leftPanel/models/leftPanelSubGroupModel';
import { mockedGroupsItems } from 'components/leftPanel/models/mockedLeftPanelGroupItems';
import { LeftPanelGroupItemModel } from 'components/leftPanel/models/leftPanelGroupItemModel';

export const TestLibraryLeftPanel: React.FC<{
}> = () => {
    const {areAllGroupsExpanded} = useAppSelector(areAllGroupsExpandedSelector)
    const dispatch = useAppDispatch()

    const onGroupToggled = () => {}

    const renderGroupItems = (items: List<LeftPanelGroupItemModel>) => {
        return items.map(
            item => {
                const {id, name, isSelected} = item
                
                return (
                    <LeftPanelItem key={id}
                                   testName={name}
                                   isSelected={isSelected}/>
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
                                    isExpanded={true}
                                    onToggle={() => onGroupToggled()}
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
                    <LeftPanelGroup key={id}
                                    text={text}
                                    isExpanded={true}
                                    onToggle={() => onGroupToggled()}>
                        {shouldRenderSubgroups ? renderSubgroups(subgroups) : renderGroupItems(items)}
                    </LeftPanelGroup>
                );
            }
        )
    }

    const renderLeftPanelCollapseAll =
            <LeftPanelCollapseAll areExpanded={areAllGroupsExpanded}
                                  onToggle={() => dispatch(onAllCollapseToggled({areExpanded: !areAllGroupsExpanded}))}/>

    return (
        <VerticalScrollableContent header={renderLeftPanelCollapseAll}>
            {renderGroups()}
        </VerticalScrollableContent>
    )
}