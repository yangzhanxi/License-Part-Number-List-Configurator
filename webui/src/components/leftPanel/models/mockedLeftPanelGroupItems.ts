import {List} from 'immutable'

import LeftPanelGroupModel from "./leftPanelGroupModel"
import LeftPanelSubgroupModel from "./leftPanelSubGroupModel"
import { LeftPanelGroupItemModel } from "./leftPanelGroupItemModel"

const mockedTest1 = new LeftPanelGroupItemModel({
    id: 'group1-subgroup1-test1',
    name: 'test1',
    isSelected: false,
    price: 1
})


const mockedTest2 = new LeftPanelGroupItemModel({
    id: 'group1-subgroup1-test2',
    name: 'test1',
    isSelected: false,
    price: 2
})


const mockedTest3 = new LeftPanelGroupItemModel({
    id: 'group1-subgroup2-test3',
    name: 'test1',
    isSelected: false,
    price: 3
})

const mockedTest4 = new LeftPanelGroupItemModel({
    id: 'group2-subgroup3-test4',
    name: 'test4',
    isSelected: false,
    price: 1
})

const mockedSubGroup1 = new LeftPanelSubgroupModel({
    id: 'group1-subgroup1',
    name: 'subgroup1',
    items: List([
        mockedTest1,
        mockedTest2
    ])
})

const mockedSubGroup2 = new LeftPanelSubgroupModel({
    id: 'group1-subgroup2',
    name: 'subgroup2',
    items: List([
        mockedTest3
    ])
})

const mockedSubGroup3 = new LeftPanelSubgroupModel({
    id: 'group2-subgroup3',
    name: 'subgroup3',
    items: List([
        mockedTest4
    ])
})

const mockedGroup1 = new LeftPanelGroupModel({
    id: 'group1',
    name: 'group1',
    subgroups: List([
        mockedSubGroup1,
        mockedSubGroup2
    ])
})

const mockedGroup2 = new LeftPanelGroupModel({
    id: 'group2',
    name: 'group2',
    subgroups: List([
        mockedSubGroup3
    ])
})

export const mockedGroupsItems = List([
    mockedGroup1,
    mockedGroup2
])