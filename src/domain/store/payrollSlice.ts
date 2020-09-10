import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { PayrollMaster, PayrollState } from '../../typings';

const initialState: PayrollState = {
  items: [],
  nextToken: null,
};

export const payrollSlice = createSlice({
  name: 'payrollList',
  initialState,
  reducers: {
    setManyPayrolls: (state, action: PayloadAction<PayrollState>) => {
      state.items = action.payload.items;
      state.nextToken = action.payload.nextToken;
    },
    createOnePayroll: (state, action: PayloadAction<PayrollMaster>) => {
      state.items.push(action.payload);
    },
    updateOnePayroll: (state, action: PayloadAction<PayrollMaster>) => {
      state.items = state.items.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
    deleteOnePayroll: (state, action: PayloadAction<PayrollMaster>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { setManyPayrolls, createOnePayroll, updateOnePayroll, deleteOnePayroll } = payrollSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPayroll = (state: RootState) => state.payrollList;

export default payrollSlice.reducer;
