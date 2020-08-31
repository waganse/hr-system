import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { networkSignOut } from '../domain/network';
import { Layout, Menu, Row, Col, Button, message } from 'antd';
import {
  PieChartOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo from '../logo.svg'

const { Header, Content, Sider, Footer } = Layout;

export function PageLayout(props: any) {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([history.location.pathname.replace('/', '')]);

  const onCollapseHandler = (collapsed: boolean) => {
    setCollapsed(collapsed);
  }

  const onClickNav = (e: any) => {
    const key: string = e.key ? e.key : 'employee';

    setSelectedKeys([key]);
    history.push(`/${key}`);
  }

  const signOutHandler = async () => {
    await networkSignOut();
    message.info('Signed out');
    history.push('/auth/signin');
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <Row justify="space-between">
          <Col>
            <NavLink to="/">
              <img src={logo} alt="EMS" style={{ width: 100, height: 30 }} />
            </NavLink>
          </Col>
          <Col>
            <Button onClick={signOutHandler}>
              Logout
            </Button>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapseHandler} width={200} className="site-layout-background">
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['employee']}
            selectedKeys={selectedKeys}
            onClick={onClickNav}
          >
            <Menu.Item key="employee" icon={<UserOutlined />} style={{ marginTop: 0 }}>
              Employee List
            </Menu.Item>
            <Menu.Item key="report" icon={<PieChartOutlined />}>
              Report
            </Menu.Item>
            <Menu.Item key="setting" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
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
