import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAuthState } from '../domain/store/authSlice';
import { networkFetchAuthState } from '../domain/network'
import { message } from 'antd';

export function AuthProvider(props: any) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAuthHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAuthHandler = async () => {
    try {
      const auth = await networkFetchAuthState();

      const isAuth = true;
      const name = auth.username;
      const roles = auth.signInUserSession.accessToken.payload["cognito:groups"];

      dispatch(updateAuthState({
        isAuth,
        user: {
          name,
          roles,
        }
      }));
    } catch {
      message.error('Session expired');
      history.push('/auth/signin');
    }
  }

  return(
    <>
      {props.children}
    </>
  );
}
