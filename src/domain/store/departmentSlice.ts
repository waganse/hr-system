import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { DepartmentMaster, DepartmentState } from '../../typings';

export const initialDepartment: DepartmentMaster = {
  id: null,
  name: '',
};

const initialState: DepartmentState = {
  items: [],
  nextToken: null,
};

export const departmentSlice = createSlice({
  name: 'DepartmentList',
  initialState,
  reducers: {
    getManyDepartments: (state, action: PayloadAction<DepartmentState>) => {
      state.items = action.payload.items;
      state.nextToken = action.payload.nextToken;
    },
    getOneDepartment: state => {
      console.clear()
      console.log('===================')
      console.log('create', state)
      console.log('===================')
    },
    searchManyDepartments: state => {
      console.clear()
      console.log('===================')
      console.log('create', state)
      console.log('===================')
    },
    createOneDepartment: (state, action: PayloadAction<DepartmentMaster>) => {
      state.items.push(action.payload);
    },
    updateOneDepartment: (state, action: PayloadAction<DepartmentMaster>) => {
      console.clear()
      console.log('===================')
      console.log('update', state)
      console.log('===================')
      state.items = state.items.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
    deleteOneDepartment: (state, action: PayloadAction<DepartmentMaster>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { getManyDepartments, getOneDepartment, searchManyDepartments, createOneDepartment, updateOneDepartment, deleteOneDepartment } = departmentSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDepartment = (state: RootState) => state.departmentList;

export default departmentSlice.reducer;
