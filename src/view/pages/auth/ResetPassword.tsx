import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, message, Alert } from 'antd';
import { Auth } from 'aws-amplify';

export function ResetPassword(props: any) {
  const history = useHistory();
  const [username, setUserName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!props.location.state?.username) {
      history.push('/auth/signin')
    } else {
      setUserName(props.location.state.username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = async (input: any) => {
    try {
      setLoading(true);
      await Auth.forgotPasswordSubmit(username, input.code, input.password);
      setLoading(false);
      message.success('Password has been reset successfully');
      history.push('/auth/signin');
    } catch(e) {
      message.error(e.message);
    }
  }

  return (
    <div style={{ width: '100%', margin: 'auto', background: '#f7f7f7' }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '100vh', maxWidth: '350px', margin: 'auto' }}>
        <div style={{ width: '100%' }}>
          <h1 style={{ display: 'flex', alignItems: 'center' }}>Verify sign-up code</h1>

          <Alert message={`Enter the verification code sent to ${username}`} type="info" showIcon style={{ marginBottom: 16 }} />

          <Form
            style={{ width: '100%' }}
            layout="vertical"
            name="verify"
            requiredMark={false}
            onFinish={onFinish}
          >
            <Form.Item
              label="Verification code"
              name="code"
              rules={[{ required: true, message: 'Please input the verification code' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="New password"
              name="password"
              rules={[{ required: true, message: 'Please input password' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="New password (confirmation)"
              name="password2"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please input password' },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit" loading={loading}>
                Reset password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
