import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import departmentReducer from './departmentSlice';
import employmentTypeReducer from './employmentTypeSlice';

export const store = configureStore({
  reducer: {
    employeeList: employeeReducer,
    departmentList: departmentReducer,
    employmentTypeList: employmentTypeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;