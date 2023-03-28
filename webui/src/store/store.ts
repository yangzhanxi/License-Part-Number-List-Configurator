import {applyMiddleware, compose, combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import TestDomainLeftPanelReducer from 'components/testLibraryLeftPanel/TestLibraryLeftPanelSlice';


const rootReducer = combineReducers({
  leftPanel: TestDomainLeftPanelReducer
})
 
const store = configureStore({
    reducer: rootReducer
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;