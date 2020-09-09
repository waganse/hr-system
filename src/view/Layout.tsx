import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { initialPagePermission } from '../domain/store/accountSlice';
import { networkSignOut } from '../domain/network';
import { Layout, Menu, Row, Col, Button, message, Space } from 'antd';
import {
  MoneyCollectOutlined,
  PieChartOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo from '../logo.svg'
import { PAGE_PERMISSION } from '../domain/store/store';
import { selectAuth } from '../domain/store/authSlice';

const { Header, Content, Sider, Footer } = Layout;

export function PageLayout(props: any) {
  const history = useHistory();
  const authState = useSelector(selectAuth);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([history.location.pathname.replace('/', '')]);
  const [permission, setPermission] = useState(initialPagePermission);

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

  const signOutHandler = async () => {
    await networkSignOut();
    message.info('Signed out');
    history.push('/auth/signin');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header print-hidden">
        <Row justify="space-between">
          <Col>
            <NavLink to="/">
              <img src={logo} alt="EMS" style={{ width: 100, height: 30 }} />
            </NavLink>
          </Col>
          <Col>
            <Space>
              <span style={{ color: '#fff' }}>{authState.user.email}</span>
              <Button onClick={signOutHandler}>
                Logout
              </Button>
            </Space>
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
  );
}
