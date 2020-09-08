import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAuthState } from '../../../domain/store/authSlice';
import { networkSignIn, networkSignOut } from '../../../domain/network';
import { Form, Input, Button, message } from 'antd';

export function SignIn(props: any) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [defaultValue, setDefaultValue] = useState('');

  useEffect(() => {
    networkSignOut();
    if (props.location.state?.initialId) {
      setDefaultValue(props.location.state.initialId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = async ({name, password}: any) => {
    try {
      const response = await networkSignIn(name, password);

      if (response.challengeName) {
        switch (response.challengeName) {
          case 'NEW_PASSWORD_REQUIRED':
            // do something
            break;
        }
      } else {
        const id = response.username;
        const email = response.attributes.email;
        const group = response.attributes['custom:userGroup'];

        const state = {
          isAuth: true,
          user: {
            id,
            email,
            group,
          }
        };

        dispatch(updateAuthState(state));
        history.push('/employee')
      }
    } catch(e) {
      if (e.code === 'UserNotConfirmedException') {
        const state = {
          isAuth: false,
          user: {
            id: '',
            email: name,
            group: '',
          }
        };

        dispatch(updateAuthState(state));
        history.push({
          pathname: '/auth/verification',
          state: { confirmException: true }
        })
      } else {
        message.error(e.message);
      }
    }
  }

  return (
    <div style={{ width: '100%', margin: 'auto', background: '#f7f7f7' }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '100vh', maxWidth: '350px', margin: 'auto' }}>
        <div style={{ width: '100%' }}>
          <h1 style={{ display: 'flex', alignItems: 'center' }}>EMS <small style={{ marginLeft: 16, fontSize: 14 }}>- Employee Management System -</small></h1>
          <Form
            style={{ width: '100%' }}
            layout="vertical"
            name="signin"
            requiredMark={false}
            onFinish={onFinish}
          >
            <Form.Item
              label="ID"
              name="name"
              rules={[{ required: true, message: 'Please input your user id!' }]}
            >
              <Input defaultValue={defaultValue} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit">
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
