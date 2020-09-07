import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import accountReducer from './accountSlice';
import employeeReducer from './employeeSlice';
import payrollReducer from './payrollSlice';
import departmentReducer from './departmentSlice';
import employmentTypeReducer from './employmentTypeSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accountList: accountReducer,
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
};

export const USER_GROUPS = [
  'admin',
  'hrAdmin',
  'accountAdmin'
];

export const DATE_FORMAT = 'DD/MM/YYYY';

export const PAGE_PERMISSION = {
  admin: {
    employee: true,
    payroll: true,
    report: true,
    master: true,
    account: true,
  },
  hrAdmin: {
    employee: true,
    payroll: false,
    report: false,
    master: false,
    account: false,
  },
  accountAdmin: {
    employee: true,
    payroll: true,
    report: true,
    master: false,
    account: false,
  }
};
