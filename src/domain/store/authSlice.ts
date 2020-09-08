import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { AuthMaster } from '../../typings'

const initialState: AuthMaster = {
  isAuth: false,
  token: '',
  user: {
    id: '',
    email: '',
    group: '',
  }
};

export const authSlice = createSlice({
  name: 'signInUser',
  initialState,
  reducers: {
    updateAuthState: (state, action: PayloadAction<AuthMaster>) => {
      state.isAuth = action.payload.isAuth;
      state.user.id = action.payload.user.id;
      state.user.email = action.payload.user.email;
      state.user.group = action.payload.user.group;
    },
  },
});

export const { updateAuthState } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
