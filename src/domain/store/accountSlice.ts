import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { AccountMaster, AccountState } from '../../typings';

export const initialPagePermission = {
  employee: false,
  payroll: false,
  report: false,
  master: false,
  account: false,
};

export const initialAccount: AccountMaster = {
  id: null,
  group: '',
  updatedAt: '',
  createdAt: '',
  cognitoId: '',
};

const initialState: AccountState = {
  items: [],
  group: '',
};

export const accountSlice = createSlice({
  name: 'AccountList',
  initialState,
  reducers: {
    setManyAccounts: (state, action: PayloadAction<AccountMaster[]>) => {
      state.items = action.payload;
    },
    setGroup: (state, action: PayloadAction<any>) => {
      state.group = action.payload.group;
    },
    createOneAccount: (state, action: PayloadAction<AccountMaster>) => {
      state.items.push(action.payload);
    },
    updateOneAccount: (state, action: PayloadAction<AccountMaster>) => {
      state.items = state.items.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
    deleteOneAccount: (state, action: PayloadAction<AccountMaster>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { setManyAccounts, setGroup, createOneAccount, updateOneAccount, deleteOneAccount } = accountSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAccount = (state: RootState) => state.accountList;

export default accountSlice.reducer;
