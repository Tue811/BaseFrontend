/**
 * ...
 */
import styled from 'styled-components';
import { Form, Input, Layout, Menu, Modal } from 'antd';
import { max } from 'lodash/math';
import { triggerFocus } from 'antd/es/input/Input';
import { icons } from 'antd/es/image/PreviewGroup';
import { Content } from 'antd/es/layout/layout';
import { DeleteOutlined, EditOutlined, UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import Button from '../../res/components/Button';
import Table from '../../res/components/Table';

const { Sider } = Layout;

export const HeaderLayout = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #e8e8e8;
  align-items: center;
  width: 100%;
  z-index: 1;
`;
export const SiteLayout = styled(Layout)`
  padding: 0;
  background-color: white;
  width: 100%;
  height: 100%;
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

export const MenuChild = styled(Menu)`
  height: 100%;
  .ant-menu-item-selected {
    font-weight: bold;
  }
`;

export const GlobalMenu = styled(Sider)`
  background-color: white;
  //border-right: 1px solid #f0f0f0;
  height: 100%;
`;

export const BodyContent = styled(Content)`
  width: 100%;
  background-color: white;
  padding: 1%;
  display: flex;
  justify-content: right;
  border-right: 2px solid #dadada;
`;

export const Contents = styled.div`
  padding: 24px;
  height: 100%;
  background-color: white;
`;

export const InputSearch = styled(Input)`
  width: 50%;
  border-radius: 10px;
`;

export const Add = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  align-items: center;
`;

export const BtnAdd = styled(Button)`
  width: 110px;
  font-weight: bold;
  border-radius: 10px;
`;

export const TotalAcc = styled.p`
  font-weight: bold;
  margin: 0;
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
    text-align: center;
  }

  .ant-btn,
  .ant-btn:active,
  .ant-btn:focus {
    border-radius: 10px;
    height: 35px;
    width: 80px;
  }
  .ant-modal-close-x {
    display: none;
  }
  .ant-modal-footer {
    border-top: none;
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    padding-top: 0;
  }

  .ant-modal-body {
    padding-bottom: 0;
  }
`;

export const PopUpDelete = styled(PopUpAdd)`
  .ant-modal-content {
    margin: 50% 0;
  }
`;

export const IconEdit = styled(EditOutlined)`
  font-size: 20px;
  padding-right: 15px;
  padding-left: 15px;

  :hover {
    color: #487ba6;
  }
`;

export const IconDelete = styled(DeleteOutlined)`
  font-size: 20px;
  :hover {
    color: #feadb9;
    cursor: pointer;
  }
`;
