import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import employeeReducer from './employeeSlice';
import payrollReducer from './payrollSlice';
import departmentReducer from './departmentSlice';
import employmentTypeReducer from './employmentTypeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    employeeList: employeeReducer,
    payrollList: payrollReducer,
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

export const EMPLOYMENT_TYPE = {
  FULL_TIME: 'Full-time',
  PART_TIME_COMMISSIONED: 'Part-time commissioned',
  PART_TIME_FIXED: 'Part-time fixed',
  INTERN: 'Intern',
}
