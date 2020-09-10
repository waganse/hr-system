import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { EmployeeMaster, EmployeeState } from '../../typings';

export const initialEmployee: EmployeeMaster = {
  id: null,
  fullName: '',
  email: '',
  designation: '',
  department: '',
  employmentType: '',
  age: null,
  address: '',
  contact: '',
  salary: 0,
  rate: 0,
  fixedRate: 0,
  commission: 0,
  joinDate: '',
};

const initialState: EmployeeState = {
  items: [],
  nextToken: null,
};

export const employeeSlice = createSlice({
  name: 'employeeList',
  initialState,
  reducers: {
    setManyEmployees: (state, action: PayloadAction<EmployeeState>) => {
      state.items = action.payload.items;
      state.nextToken = action.payload.nextToken;
    },
    createOneEmployee: (state, action: PayloadAction<EmployeeMaster>) => {
      state.items.push(action.payload);
    },
    updateOneEmployee: (state, action: PayloadAction<EmployeeMaster>) => {
      state.items = state.items.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
    deleteOneEmployee: (state, action: PayloadAction<EmployeeMaster>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { setManyEmployees, getOneEmployee, createOneEmployee, updateOneEmployee, deleteOneEmployee } = employeeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectEmployee = (state: RootState) => state.employeeList;

export default employeeSlice.reducer;
