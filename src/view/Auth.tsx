import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAuthState } from '../domain/store/authSlice';
import { networkFetchAuthState } from '../domain/network'
import { PAGE_PERMISSION, INIT_PAGE } from '../domain/store/store'

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
      const path = props.location.pathname.slice(1);

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

      if (!PAGE_PERMISSION[group][path] && path !== 'instruction') {
        history.push(INIT_PAGE[group]);
      }
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
