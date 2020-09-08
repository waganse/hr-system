import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAuthState } from '../domain/store/authSlice';
import { networkFetchAuthState } from '../domain/network'

export function AuthProvider(props: any) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('AUTH===================');
    fetchAuthHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAuthHandler = async () => {
    try {
      const user = await networkFetchAuthState();

      const isAuth = true;
      const id = user.username;
      const email = user.attributes.email;
      const group = user.attributes['custom:userGroup'];

      dispatch(updateAuthState({
        isAuth,
        user: {
          id,
          email,
          group,
        }
      }));
    } catch {
      history.push('/auth/signin');
    }
  }

  return(
    <>
      {props.children}
    </>
  );
}
