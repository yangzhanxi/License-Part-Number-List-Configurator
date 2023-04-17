// import {List, Set} from 'immutable';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { group } from 'console';
import { enableMapSet } from 'immer';

enableMapSet();
interface State {
  areAllGroupsExpanded: boolean;
  expandedGroupIds: Set<string>;
  expandedSubGroupIds: Set<string>;
  selectedSolutionIds: Set<string>;
}

const DEFAULT_STATE: State = {
  areAllGroupsExpanded: false,
  expandedGroupIds: new Set(),
  expandedSubGroupIds: new Set(),
  selectedSolutionIds: new Set()
};

const TestDomainLeftPanelSlice = createSlice({
  name: 'TestDomainLeftPanel',
  initialState: DEFAULT_STATE,
  reducers: {
    onAllCollapseToggled: (state, action: PayloadAction<boolean>) => {
      state.areAllGroupsExpanded = action.payload
    },
    onGroupToggled: (state, action: PayloadAction<string>) => {
      const groupIds = new Set(state.expandedGroupIds)

      if (groupIds.has(action.payload)) {
        groupIds.delete(action.payload)
      } else (
        groupIds.add(action.payload)
      )

      state.expandedGroupIds = groupIds
    },

    onSubGroupToggled: (state, action: PayloadAction<string>) => {
      const groupIds = new Set(state.expandedSubGroupIds)

      if (groupIds.has(action.payload)) {
        groupIds.delete(action.payload)
      } else (
        groupIds.add(action.payload)
      )

      state.expandedSubGroupIds = groupIds
    },

    onSolutionIdsToggled: (state, action: PayloadAction<string>) => {
      const solutionIds = new Set(state.selectedSolutionIds)

      if (solutionIds.has(action.payload)) {
        solutionIds.delete(action.payload)
      } else {
        solutionIds.add(action.payload)
      }

      state.selectedSolutionIds = solutionIds
      console.log(state.selectedSolutionIds)
    }

  }
})

export const {
  onAllCollapseToggled,
  onGroupToggled,
  onSubGroupToggled,
  onSolutionIdsToggled
} = TestDomainLeftPanelSlice.actions;

export default TestDomainLeftPanelSlice.reducer;