import {RootState} from 'store/store';

export const leftPanelSelector = (state: RootState) => state.leftPanel

export const allGroupIds: Set<string> = new Set([
    'routting-and-mpls', 'sdn'
])

export const allSubGroupIds: Set<string> = new Set([
    'routting-and-mpls-is-is', 'sdn-pcep'
])