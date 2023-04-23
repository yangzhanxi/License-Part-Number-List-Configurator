import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';

import { allGroupIds, allSubGroupIds } from 'components/leftPanel/Left Panel Selector';

enableMapSet();
interface State {
  areAllGroupsExpanded: boolean;
  expandedGroupIds: Set<string>;
  expandedSubGroupIds: Set<string>;
  selectedSolutionIds: Set<string>;
  searchString: string;
}

const DEFAULT_STATE: State = {
  areAllGroupsExpanded: false,
  expandedGroupIds: new Set(),
  expandedSubGroupIds: new Set(),
  selectedSolutionIds: new Set(),
  searchString: ''
};

const TestDomainLeftPanelSlice = createSlice({
  name: 'TestDomainLeftPanel',
  initialState: DEFAULT_STATE,
  reducers: {
    onAllCollapseToggled: (state, action: PayloadAction<boolean>) => {
      state.areAllGroupsExpanded = action.payload
      if (state.areAllGroupsExpanded) {
        state.expandedGroupIds = allGroupIds
        state.expandedSubGroupIds = allSubGroupIds
      } else {
        state.expandedGroupIds.clear()
        state.expandedSubGroupIds.clear()
      }
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
    },

    onClearSolutionIds: (state) => {
      state.selectedSolutionIds = new Set()
    },

    onSearchStringChanged: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload
    }

  }
})

export const {
  onAllCollapseToggled,
  onGroupToggled,
  onSubGroupToggled,
  onSolutionIdsToggled,
  onClearSolutionIds,
  onSearchStringChanged
} = TestDomainLeftPanelSlice.actions;

export default TestDomainLeftPanelSlice.reducer;