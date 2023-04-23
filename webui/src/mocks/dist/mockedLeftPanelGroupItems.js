"use strict";
exports.__esModule = true;
exports.mockedGroupItems = exports.mockedGroupsItems = void 0;
var immutable_1 = require("immutable");
var leftPanelGroupModel_1 = require("../components/leftPanel/models/leftPanelGroupModel");
var leftPanelSubGroupModel_1 = require("../components/leftPanel/models/leftPanelSubGroupModel");
var leftPanelGroupItemModel_1 = require("../components/leftPanel/models/leftPanelGroupItemModel");
var mockedTest1 = new leftPanelGroupItemModel_1.LeftPanelGroupItemModel({
    id: 'routting-and-mpls-is-is-srv6',
    name: 'IS-IS SRv6',
    isSelected: false,
    price: 1
});
var mockedTest4 = new leftPanelGroupItemModel_1.LeftPanelGroupItemModel({
    id: 'routting-and-mpls-is-is-ipv4',
    name: 'IS-IS IPv4',
    isSelected: false,
    price: 1
});
var mockedTest5 = new leftPanelGroupItemModel_1.LeftPanelGroupItemModel({
    id: 'routting-and-mpls-is-is-ipv6',
    name: 'IS-IS IPv6',
    isSelected: false,
    price: 1
});
var mockedTest6 = new leftPanelGroupItemModel_1.LeftPanelGroupItemModel({
    id: 'routting-and-mpls-is-is-mpls',
    name: 'IS-IS MPLS',
    isSelected: false,
    price: 1
});
var mockedTest2 = new leftPanelGroupItemModel_1.LeftPanelGroupItemModel({
    id: 'sdn-pcep-pcc',
    name: 'PCC',
    isSelected: false,
    price: 2
});
var mockedTest3 = new leftPanelGroupItemModel_1.LeftPanelGroupItemModel({
    id: 'sdn-pcep-pce',
    name: 'PCE',
    isSelected: false,
    price: 2
});
var mockedSubGroup1 = new leftPanelSubGroupModel_1["default"]({
    id: 'routting-and-mpls-is-is',
    name: 'IS-IS',
    items: immutable_1.List([
        mockedTest1,
        mockedTest4,
        mockedTest5,
        mockedTest6
    ])
});
var mockedSubGroup2 = new leftPanelSubGroupModel_1["default"]({
    id: 'sdn-pcep',
    name: 'PCEP',
    items: immutable_1.List([
        mockedTest2,
        mockedTest3
    ])
});
var mockedGroup1 = new leftPanelGroupModel_1["default"]({
    id: 'routting-and-mpls',
    name: 'Routting and MPLS',
    subgroups: immutable_1.List([
        mockedSubGroup1
    ])
});
var mockedGroup2 = new leftPanelGroupModel_1["default"]({
    id: 'sdn',
    name: 'SDN',
    subgroups: immutable_1.List([
        mockedSubGroup2
    ])
});
var mockedGroup3 = new leftPanelGroupModel_1["default"]({
    id: 'tsn',
    name: 'TSN',
    subgroups: immutable_1.List([])
});
var mockedGroup4 = new leftPanelGroupModel_1["default"]({
    id: 'access',
    name: 'Access',
    subgroups: immutable_1.List([])
});
var mockedGroup5 = new leftPanelGroupModel_1["default"]({
    id: 'app-layer-pro',
    name: 'Application Layer Protocols',
    subgroups: immutable_1.List([])
});
var mockedGroup6 = new leftPanelGroupModel_1["default"]({
    id: 'carrier-ethernet',
    name: 'Carrier Ethernet',
    subgroups: immutable_1.List([])
});
var mockedGroup7 = new leftPanelGroupModel_1["default"]({
    id: 'event-manager',
    name: 'Event Manager',
    subgroups: immutable_1.List([])
});
var mockedGroup8 = new leftPanelGroupModel_1["default"]({
    id: 'iot',
    name: 'Iot',
    subgroups: immutable_1.List([])
});
exports.mockedGroupsItems = searchString;
immutable_1.List([
    mockedGroup1,
    mockedGroup2,
    mockedGroup3,
    mockedGroup4,
    mockedGroup5,
    mockedGroup6,
    mockedGroup7,
    mockedGroup8,
]);
exports.mockedGroupItems = immutable_1.List([]);
exports.mockedGroupItems;
