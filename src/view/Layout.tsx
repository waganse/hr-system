import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { initialPagePermission } from '../domain/store/accountSlice';
import { networkSignOut } from '../domain/network';
import { Layout, Menu, Row, Col, Button, message, Dropdown, Modal, Form, Input } from 'antd';
import {
  MoneyCollectOutlined,
  PieChartOutlined,
  UserOutlined,
  SettingOutlined,
  DownOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo from '../logo.svg'
import { PAGE_PERMISSION } from '../domain/store/store';
import { selectAuth } from '../domain/store/authSlice';
import { Auth } from 'aws-amplify';

const { Header, Content, Sider, Footer } = Layout;

export function PageLayout(props: any) {
  const history = useHistory();
  const authState = useSelector(selectAuth);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([history.location.pathname.replace('/', '')]);
  const [permission, setPermission] = useState(initialPagePermission);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (authState.user.group) {
      setPermission(PAGE_PERMISSION[authState.user.group]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  const onCollapseHandler = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  const onClickNav = (e: any) => {
    const key: string = e.key ? e.key : 'employee';

    setSelectedKeys([key]);
    history.push(`/${key}`);
  };

  const onClickChangePassword = () => {
    setModalVisible(true);
  };

  const changePasswordHandler = async (input: any) => {
    try {
      setLoading(true);
      const user = await Auth.currentAuthenticatedUser();

      await Auth.changePassword(user, input.oldPassword, input.newPassword);
      setLoading(false);
      message.success('Password changed successfully');
      history.push({
        pathname: '/auth/signin',
        state: {
          email: authState.user.email,
        }
      });
    } catch(e) {
      message.error(e.message);
    }
  };

  const onClickSignOut = async () => {
    await networkSignOut();
    message.info('Signed out');
    history.push('/auth/signin');
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={onClickChangePassword}>Change password</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <a onClick={onClickSignOut}>Sign out</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header print-hidden">
          <Row justify="space-between">
            <Col>
              <NavLink to="/">
                <img src={logo} alt="EMS" style={{ width: 100, height: 30 }} />
              </NavLink>
            </Col>
            <Col>
              <Dropdown overlay={menu} trigger={['click']}>
                <a onClick={e => e.preventDefault()} style={{ color: '#fff' }}>
                  {authState.user.email} <DownOutlined />
                </a>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapseHandler} width={200} className="site-layout-background print-hidden">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['employee']}
              selectedKeys={selectedKeys}
              onClick={onClickNav}
            >
              { permission.employee ?
                <Menu.Item key="employee" icon={<UserOutlined />} style={{ marginTop: 0 }}>
                  Employee List
                </Menu.Item> : null
              }
              { permission.payroll ?
                <Menu.Item key="payroll" icon={<MoneyCollectOutlined />}>
                  Payroll
                </Menu.Item> : null
              }
              { permission.report ?
                <Menu.Item key="report" icon={<PieChartOutlined />}>
                  Report
                </Menu.Item> : null
              }
              { permission.master ?
                <Menu.Item key="master" icon={<SettingOutlined />}>
                  Master Data
                </Menu.Item> : null
              }
              { permission.account ?
                <Menu.Item key="account" icon={<SettingOutlined />}>
                  Account List
                </Menu.Item> : null
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {props.children}
            </Content>
            <Footer style={{ textAlign: 'center', color: '#888' }}>
              EMS - Employee Management System
            </Footer>
          </Layout>
        </Layout>
      </Layout>
      <Modal
        title="Change password"
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
          onFinish={changePasswordHandler}
        >
          <Form.Item
            label="Old password"
            name="oldPassword"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="New password"
            name="newPassword"
            rules={[{ required: true, message: 'Please input your new password' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="New password (confirmation)"
            name="password2"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: 'Please input your new password' },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('newPassword') === value) {
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
              Change password
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
