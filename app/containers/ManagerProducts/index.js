import React, { useState } from 'react';
/**
 * ...
 */
import { Checkbox, Form, Input } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  GoldOutlined,
  GiftOutlined,
  UsergroupDeleteOutlined,
  BarChartOutlined,
  FundOutlined,
  ContainerOutlined,
  CreditCardOutlined,
  SoundOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Layout, Menu } from 'antd';
import Button from '../../res/components/Button';
import {
  ButtonLogin,
  Container,
  FormLogin,
  InputLogin,
  InputPassword,
  LayoutLogin,
  Logo,
  MenuLogo,
  NoteLogin,
  OptionLogin,
  SiteLayout,
  TilteLogin,
} from './stylesManagerProduct';
import logo from '../../images/logo.svg';

const { Header, Sider, Content } = Layout;
const ManagerProducts = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isShowLogo, setIsShowLogo] = useState(true);
  const onClickMenu = () => {
    setCollapsed(!collapsed);
    setIsShowLogo(!isShowLogo);
  };
  return (
    <Router>
      <SiteLayout>
        <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
          <MenuLogo>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: onClickMenu,
              },
            )}
            <Logo>{isShowLogo ? <img src={logo} alt="logo" /> : null}</Logo>
          </MenuLogo>
          <Menu
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Quản lý tài khoản',
              },
              {
                key: '2',
                icon: <GoldOutlined />,
                label: 'Quản lý sản phẩm',
              },
              {
                key: '3',
                icon: <GiftOutlined />,
                label: 'Quản lý quà',
              },
              {
                key: '4',
                icon: <UsergroupDeleteOutlined />,
                label: 'Quản lý nhóm quyền',
              },
              {
                key: '5',
                icon: <BarChartOutlined />,
                label: 'Thống kê',
              },
              {
                key: '6',
                icon: <CreditCardOutlined />,
                label: 'Quản lý loại thẻ',
              },
              {
                key: '7',
                icon: <SoundOutlined />,
                label: 'Quản lý thông báo',
              },
              {
                key: '8',
                icon: <ContainerOutlined />,
                label: 'Quản lý đơn đặt hàng',
              },
              {
                key: '9',
                icon: <FundOutlined />,
                label: 'Quản lý Health Check',
              },
              {
                key: '10',
                icon: <WalletOutlined />,
                label: 'Hướng dẫn sử dụng',
              },
            ]}
          />
        </Sider>
        <SiteLayout>
          <Header />
          <Content>Content</Content>
        </SiteLayout>
      </SiteLayout>
    </Router>
  );
};

export default ManagerProducts;
