import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface State {
  areAllGroupsExpanded: boolean;
}

const DEFAULT_STATE: State = {
  areAllGroupsExpanded: false,
};

const TestDomainLeftPanelSlice = createSlice({
  name: 'TestDomainLeftPanel',
  initialState: DEFAULT_STATE,
  reducers: {
    onAllCollapseToggled: (state, action: PayloadAction<{areExpanded: boolean}>) => {
      const {areExpanded} = action.payload
      state.areAllGroupsExpanded = areExpanded
    }
  }
})

export const { onAllCollapseToggled } = TestDomainLeftPanelSlice.actions;

export default TestDomainLeftPanelSlice.reducer;