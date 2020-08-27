import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { SignInUserMaster } from '../../typings'

const initialState: SignInUserMaster = {
  roles: [],
  name: '',
};

export const authSlice = createSlice({
  name: 'signInUser',
  initialState,
  reducers: {
    initSignInUserInfo: (state, action: PayloadAction<SignInUserMaster>) => {
      state.roles = action.payload.roles;
      state.name = action.payload.name;

      console.clear();
console.log('===================');
console.log(action.payload);
console.log('===================');
    },
  },
});

export const { initSignInUserInfo } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAuth = (state: RootState) => state.signInUser;

export default authSlice.reducer;
