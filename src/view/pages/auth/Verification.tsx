import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../domain/store/authSlice';
import { networkVerifyAccount } from '../../../domain/network';
import { Form, Input, Button, message } from 'antd';
import { Auth } from 'aws-amplify';

export function Verification(props: any) {
  const history = useHistory();
  const authState = useSelector(selectAuth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!props.location.state?.confirmException) {
      history.push('/auth/signin')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = async ({code}: any) => {
    try {
      setLoading(true);
      const email = authState.user.email;

      await networkVerifyAccount(email as string, code);

      setLoading(false);
      message.success('Account is verified!')
      history.push({
        pathname: '/auth/signin',
        state: { initialId: email, }
      })
    } catch(e) {
      message.error(e.message);
    }
  }

  const resendCodeHandler = async () => {
    try {
      const email = authState.user.email as string;
      await Auth.resendSignUp(email);

      message.success(`Verification code has been sent to ${email}`);
    } catch(e) {
      message.error(e.message);
    }
  }

  return (
    <div style={{ width: '100%', margin: 'auto', background: '#f7f7f7' }}>
      <div style={{ display: 'flex', alignItems: 'center', height: '100vh', maxWidth: '350px', margin: 'auto' }}>
        <div style={{ width: '100%' }}>
          <h1 style={{ display: 'flex', alignItems: 'center' }}>Verify sign-up code</h1>
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
            <Form.Item style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit" loading={loading}>
                Verify
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: 'center' }}>
            <a href="#" onClick={resendCodeHandler}>Resend verification code</a>
          </div>
        </div>
      </div>
    </div>
  );
}
