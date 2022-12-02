/**
 * ...
 */
import styled from 'styled-components';
import { Form, Input, Layout, Modal } from 'antd';
import { max } from 'lodash/math';
import { triggerFocus } from 'antd/es/input/Input';
import Sider from 'antd/es/layout/Sider';
import { icons } from 'antd/es/image/PreviewGroup';
import { Content } from 'antd/es/layout/layout';
import { UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import Button from '../../res/components/Button';
import Table from '../../res/components/Table';

export const Headers = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #e8e8e8;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1;
`;
export const SiteLayout = styled(Layout)`
  padding: 0;
  background-color: white;
  width: 100%;
`;

export const MenuLogo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px 20px;
  position: relative;
  font-size: 25px;
`;

export const Logo = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 90px;
  border-right: 2px solid #dadada;
  padding-right: 10px;
`;

export const LogoText = styled.img`
  padding-left: 10px;
`;

export const IconUser = styled(UserOutlined)`
  margin: 1%;
  padding: 3px;
  font-size: 25px;
  color: #487ba6;
  border: 2px solid #487ba6;
  border-radius: 100%;
`;

export const MenuOption = styled(Sider)`
  width: 20%;
  background-color: white;
  position: absolute;
  height: 100vh;
  ul {
    height: 100%;
  }
`;

export const GlobalMenu = styled(Sider)`
  background-color: white;
  position: fixed;
  margin-top: 74px;
  border-right: 2px solid #dadada;
  height: 100vh;
  ul {
    height: 100%;
  }
`;

export const BodyContent = styled(Content)`
  width: 100%;
  background-color: white;
  padding: 1%;
  display: flex;
  justify-content: right;
  margin-top: 66px;
  border-right: 2px solid #dadada;
`;

export const Contents = styled.div`
  width: 84%;
`;

export const InputSearch = styled(Input)`
  width: 50%;

  border-radius: 10px;
`;

export const Add = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const BtnAdd = styled(Button)`
  width: 110px;
  font-weight: bold;
  border-radius: 10px;
`;

export const TotalAcc = styled.p`
  font-weight: bold;
`;

export const TableProduct = styled(Table)`
  border: none;
`;

export const InputAddName = styled(Input)`
  border-radius: 10px;
`;

export const InputAddDes = styled(TextArea)`
  border-radius: 10px;
  margin: 10px 0;
`;

export const PopUpAdd = styled(Modal)`
  .ant-modal-header {
    background-color: #c5ced9;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .ant-modal-content {
    border-radius: 10px;
  }
  .ant-modal-title {
    font-weight: bold;
  }

  .ant-btn,
  .ant-btn:active,
  .ant-btn:focus {
    border-radius: 10px;
  }
`;
