/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Cookies from 'js-cookie';
import {
  BarChartOutlined,
  ContainerOutlined,
  CreditCardOutlined,
  FundOutlined,
  GiftOutlined,
  GoldOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SoundOutlined,
  UsergroupDeleteOutlined,
  UserOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
// import cookies from 'react-cookies';
import Login from '../Login/LoadableLogin';
import ErrorPage from '../../res/components/ErrorPage';

import GlobalStyle from '../../global-styles';
import { normalTheme } from '../../themes/normalTheme';
import ManagerProducts from '../ManagerProductLine';
import ManagerProductLine from '../ManagerProductLine';
import ManagerProduct from '../ManagerProduct';
import { COOKIES } from '../../utils/constants';
import {
  GlobalMenu,
  HeaderLayout,
  IconUser,
  Logo,
  LogoImg,
  LogoText,
  MenuChild,
  MenuLogo,
} from '../ManagerProductLine/stylesManagerProductLine';
import logo from '../../images/logo.svg';
import dl from '../../images/DL.svg';
import { SiteLayout } from './styles';

const ContainerNotLogin = ({ component: Component }) => {
  const token = Cookies.get(COOKIES.access_token);

  return (
    <Route
      render={() =>
        !token ? <Component /> : <Redirect to="/manager-product" />
      }
    />
  );
};
ContainerNotLogin.propTypes = {
  component: PropTypes.object.isRequired,
};

const ContainerLogin = ({ component: Component }) => {
  const { Content } = Layout;
  const token = Cookies.get(COOKIES.access_token);
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  const onClickManagerProduct = () => {
    history.push('/manager-product');
  };

  const changeManagerProduct = () => {
    history.push('/manager-product');
  };

  const onClickManagerProductLine = () => {
    history.push('/manager-product-line');
  };

  const MENU_DATA = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Quản lý sản phẩm',
      onClick: onClickManagerProduct,
      select: changeManagerProduct,
    },
    {
      key: '2',
      icon: <GoldOutlined />,
      label: 'Quản lý dòng sản phẩm',
      onClick: onClickManagerProductLine,
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
  ];

  if (!token) return <Redirect to="/login" />;

  const onClickMenu = () => {
    setCollapsed(!collapsed);
  };

  const logout = () => {
    COOKIES.remove('access_token');
    // cookies.remove('user');
  };

  return (
    <Route
      render={() => (
        <SiteLayout>
          <HeaderLayout>
            <MenuLogo>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: onClickMenu,
                },
              )}
              <Logo>
                <LogoImg src={logo} alt="logo" />
                <LogoText src={dl} alt="Quản lý" />
              </Logo>
            </MenuLogo>
            <IconUser onClick={logout} />
          </HeaderLayout>
          <Layout>
            <GlobalMenu
              trigger={null}
              collapsible
              collapsed={collapsed}
              width="215px"
              max-width="215px"
            >
              <MenuChild items={MENU_DATA} defaultSelectedKeys={['1']} />
            </GlobalMenu>
            <Content>
              <Component />
            </Content>
          </Layout>
        </SiteLayout>
      )}
    />
  );
};
ContainerLogin.propTypes = {
  component: PropTypes.object.isRequired,
};

export default function App() {
  return (
    <ThemeProvider theme={normalTheme}>
      <>
        <Switch>
          <ContainerNotLogin exact path="/" component={Login} />
          <ContainerNotLogin exact path="/login" component={Login} />
          <ContainerLogin
            exact
            path="/manager-product-line"
            component={ManagerProductLine}
          />
          <ContainerLogin
            exact
            path="/manager-product"
            component={ManagerProduct}
          />
          <Route path="" render={() => <ErrorPage code="404" />} />
        </Switch>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
