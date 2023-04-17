import {List} from 'immutable'

import LeftPanelGroupModel from "../components/leftPanel/models/leftPanelGroupModel"
import LeftPanelSubgroupModel from "../components/leftPanel/models/leftPanelSubGroupModel"
import { LeftPanelGroupItemModel } from "../components/leftPanel/models/leftPanelGroupItemModel"

const mockedTest1 = new LeftPanelGroupItemModel({
    id: 'routting-and-mpls-is-is-srv6',
    name: 'IS-IS SRv6',
    isSelected: false,
    price: 1
})

const mockedTest4 = new LeftPanelGroupItemModel({
    id: 'routting-and-mpls-is-is-ipv4',
    name: 'IS-IS IPv4',
    isSelected: false,
    price: 1
})

const mockedTest5 = new LeftPanelGroupItemModel({
    id: 'routting-and-mpls-is-is-ipv6',
    name: 'IS-IS IPv6',
    isSelected: false,
    price: 1
})

const mockedTest6 = new LeftPanelGroupItemModel({
    id: 'routting-and-mpls-is-is-mpls',
    name: 'IS-IS MPLS',
    isSelected: false,
    price: 1
})


const mockedTest2 = new LeftPanelGroupItemModel({
    id: 'sdn-pcep-pcc',
    name: 'PCC',
    isSelected: false,
    price: 2
})


const mockedTest3 = new LeftPanelGroupItemModel({
    id: 'sdn-pcep-pce',
    name: 'PCE',
    isSelected: false,
    price: 2
})

const mockedSubGroup1 = new LeftPanelSubgroupModel({
    id: 'routting-and-mpls-is-is',
    name: 'IS-IS',
    items: List([
        mockedTest1,
        mockedTest4,
        mockedTest5,
        mockedTest6
    ])
})

const mockedSubGroup2 = new LeftPanelSubgroupModel({
    id: 'sdn-pcep',
    name: 'PCEP',
    items: List([
        mockedTest2,
        mockedTest3
    ])
})

const mockedGroup1 = new LeftPanelGroupModel({
    id: 'routting-and-mpls',
    name: 'Routting and MPLS',
    subgroups: List([
        mockedSubGroup1
    ])
})

const mockedGroup2 = new LeftPanelGroupModel({
    id: 'sdn',
    name: 'SDN',
    subgroups: List([
        mockedSubGroup2
    ])
})

const mockedGroup3 = new LeftPanelGroupModel({
    id: 'tsn',
    name: 'TSN',
    subgroups: List([])
})

const mockedGroup4 = new LeftPanelGroupModel({
    id: 'access',
    name: 'Access',
    subgroups: List([])
})

const mockedGroup5 = new LeftPanelGroupModel({
    id: 'app-layer-pro',
    name: 'Application Layer Protocols',
    subgroups: List([])
})

const mockedGroup6 = new LeftPanelGroupModel({
    id: 'carrier-ethernet',
    name: 'Carrier Ethernet',
    subgroups: List([])
})

const mockedGroup7 = new LeftPanelGroupModel({
    id: 'event-manager',
    name: 'Event Manager',
    subgroups: List([])
})

const mockedGroup8 = new LeftPanelGroupModel({
    id: 'iot',
    name: 'Iot',
    subgroups: List([])
})


export const mockedGroupsItems = List([
    mockedGroup1,
    mockedGroup2,
    mockedGroup3,
    mockedGroup4,
    mockedGroup5,
    mockedGroup6,
    mockedGroup7,
    mockedGroup8,
])