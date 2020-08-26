import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo from '../logo.svg'

const { Header, Content, Sider, Footer } = Layout;

export function PageLayout(props: any) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapseHandler = (collapsed: boolean) => {
    setCollapsed(collapsed);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapseHandler}>
        <div className="logo" style={{ height: 32, margin: 14 }}>
          <img src={logo} alt="EMS" style={{ width: '100%', height: '100%' }}/>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            Employee List
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            Report
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', color: '#888' }}>
          EMS - Employee Management System
        </Footer>
      </Layout>
  </Layout>
);
}
