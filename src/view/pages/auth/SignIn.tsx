import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAuthState } from '../../../domain/store/authSlice';
import { networkSignIn, networkSignOut } from '../../../domain/network';
import { Form, Input, Checkbox, Button, message } from 'antd';

export function SignIn() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    networkSignOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = async ({name, password}: any) => {
    try {
      const user = await networkSignIn(name, password);

      const state = {
        isAuth: true,
        user: {
          name: user.username,
          roles: user.signInUserSession.accessToken.payload["cognito:groups"],
        }
      };

      dispatch(updateAuthState(state));
      history.push('/employee')
    } catch(e) {
      message.error('Failed to sign in');
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', maxWidth: 350, height: '100vh', margin: 'auto' }}>
      <div style={{ width: '100%' }}>
        <h1>EMS</h1>
        <Form
          style={{ width: '100%' }}
          layout="vertical"
          name="signin"
          initialValues={{ remember: true }}
          requiredMark={false}
          onFinish={onFinish}
        >
          <Form.Item
            label="ID"
            name="name"
            rules={[{ required: true, message: 'Please input your user id!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
