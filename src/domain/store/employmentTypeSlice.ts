import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { EmploymentTypeMaster, EmploymentTypeState } from '../../typings';

export const initialEmploymentType: EmploymentTypeMaster = {
  id: null,
  name: '',
  useBonus: false,
  useSalary: false,
  useRate: false,
  useFixedRate: false,
  useCommission: false,
};

const initialState: EmploymentTypeState = {
  items: [],
  nextToken: null,
};

export const employmentTypeSlice = createSlice({
  name: 'EmploymentTypeList',
  initialState,
  reducers: {
    getManyEmploymentTypes: (state, action: PayloadAction<EmploymentTypeState>) => {
      state.items = action.payload.items;
      state.nextToken = action.payload.nextToken;
    },
    getOneEmploymentType: state => {
      console.clear()
      console.log('===================')
      console.log('create', state)
      console.log('===================')
    },
    searchManyEmploymentTypes: state => {
      console.clear()
      console.log('===================')
      console.log('create', state)
      console.log('===================')
    },
    createOneEmploymentType: (state, action: PayloadAction<EmploymentTypeMaster>) => {
      state.items.push(action.payload);
    },
    updateOneEmploymentType: (state, action: PayloadAction<EmploymentTypeMaster>) => {
      console.clear()
      console.log('===================')
      console.log('update', state)
      console.log('===================')
      state.items = state.items.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
    deleteOneEmploymentType: (state, action: PayloadAction<EmploymentTypeMaster>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { getManyEmploymentTypes, getOneEmploymentType, searchManyEmploymentTypes, createOneEmploymentType, updateOneEmploymentType, deleteOneEmploymentType } = employmentTypeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectEmploymentType = (state: RootState) => state.employmentTypeList;

export default employmentTypeSlice.reducer;
