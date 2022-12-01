import React, { useEffect, useState } from 'react';
/**
 * ...
 */
import { Checkbox, Form, Input, Table } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
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
  SearchOutlined,
} from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { Layout, Menu } from 'antd';
import axios from 'axios';

import Button from '../../res/components/Button';
import {
  Add,
  BodyContent,
  BtnAdd,
  ButtonLogin,
  Container,
  Contents,
  FormLogin,
  GlobalMenu,
  HeaderManager,
  Headers,
  IconUser,
  ImputSearch,
  InputLogin,
  InputPassword,
  InputSearch,
  LayoutLogin,
  Logo,
  LogoImg,
  LogoText,
  MenuLogo,
  MenuOption,
  NoteLogin,
  OptionLogin,
  SiteLayout,
  TableProduct,
  TilteLogin,
  TotalAcc,
} from './stylesManagerProduct';
import logo from '../../images/logo.svg';
import dl from '../../images/DL.svg';

const { Header, Sider, Content } = Layout;

const columns = [
  {
    title: 'STT',
    width: '4%',
    dataIndex: 'number',
    key: 'number',
    align: 'center',
  },
  {
    title: 'Tên sản phẩm',
    width: 200,
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Mô tả',
    dataIndex: 'des',
    key: 'des',
    width: '35%',
  },
  {
    title: 'Thời gian tạo',
    dataIndex: 'creatTime',
    key: 'creatTime',
    width: 150,
  },
  {
    title: 'Chức năng',
    dataIndex: 'function',
    key: 'function',
    width: 150,
  },
];

const ManagerProducts = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const config = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkNDJkMmNmNC03YjA0LTQ2YjYtODhkNi1lMmNiNjBmZTkwYzAiLCJpYXQiOjE2Njk4ODQyNjEsImV4cCI6MTY3MDQ4OTA2MX0.J_YadOQadbUvEEPm3y_1mPPWfGsHS09peOAwbqtQm9XcD5VE2OVk5e7zAHyVABjRq3-lhwNztPfeQcI-5b2IBw',
    },
  };

  const onClickMenu = () => {
    setCollapsed(!collapsed);
  };

  const getList = () => {
    axios
      .get('http://10.2.65.99:7777/api/v1/product-line', config)
      .then(res => {
        const listData = {
          name: res.data.name,
          des: res.data.description,
          creatTime: res.data.updateAt,
        };
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Router>
      <Headers>
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
        <IconUser />
      </Headers>

      <SiteLayout>
        <div>
          <GlobalMenu trigger={null} collapsible collapsed={collapsed}>
            <MenuOption
              theme="light"
              trigger={null}
              collapsible
              collapsed={collapsed}
            >
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
            </MenuOption>
          </GlobalMenu>
        </div>
        <BodyContent>
          <Contents>
            <InputSearch
              size="large"
              placeholder="Tìm kiếm theo Tên đăng nhập, Tên đầy đủ, Số điện thoại"
              prefix={<SearchOutlined />}
            />
            <Add>
              <TotalAcc>Quản lý tài khoản: 334</TotalAcc>
              <BtnAdd>+ Thêm mới</BtnAdd>
            </Add>

            <TableProduct
              data={data}
              columns={columns}
              loading
              pagination
              scroll={{
                x: 1500,
              }}
            />
          </Contents>
        </BodyContent>
      </SiteLayout>
    </Router>
  );
};

export default ManagerProducts;
