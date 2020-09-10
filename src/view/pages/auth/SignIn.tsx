import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Auth } from 'aws-amplify';
import { updateAuthState } from '../../../domain/store/authSlice';
import { networkSignIn, networkSignOut } from '../../../domain/network';
import { Form, Input, Button, message, Modal } from 'antd';
import logo from '../../../logo.png';

export function SignIn(props: any) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [defaultValue, setDefaultValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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

  const onClickForgotPassword = () => {
    setModalVisible(true);
  }

  const forgotPasswordHandler = async (input: any) => {
    try {
      await Auth.forgotPassword(input.username);

      history.push({
        pathname: '/auth/reset',
        state: {
          username: input.username,
        }
      });
    } catch(e) {
      message.error(e.message);
    }
  }

  return (
    <>
      <div style={{ width: '100%', margin: 'auto', background: '#f7f7f7' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '100vh', maxWidth: '350px', margin: 'auto' }}>
          <div style={{ width: '100%' }}>
            <h1 style={{ textAlign: 'center', marginBottom: 16 }}>
              <img src={logo} alt="EMS" style={{ width: 150 }}/>
            </h1>
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
                rules={[{ required: true, message: 'Please input your user id' }]}
              >
                <Input defaultValue={defaultValue} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item style={{ textAlign: 'center' }}>
                <Button type="primary" htmlType="submit">
                  Sign in
                </Button>
              </Form.Item>
            </Form>
            <div style={{ textAlign: 'center' }}>
              <a href="#" onClick={onClickForgotPassword}>Forgot password</a>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Reset password"
        centered
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <Form
          style={{ width: '100%' }}
          layout="vertical"
          name="signin"
          requiredMark={false}
          onFinish={forgotPasswordHandler}
        >
          <Form.Item
            label="Enter your login ID (e-mail)"
            name="username"
            rules={[
              { required: true, message: 'Please input your user id' },
              { type: 'email', message: 'Not a valid email' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">
              Send verification code
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
