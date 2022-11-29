/**
 * ...
 */

import styled from 'styled-components';
import { Form, Input } from 'antd';
import Button from '../../res/components/Button';

const Container = styled.div`
  // background: ${props => props.theme.colors.background};
  //display: flex;
  //align-items: center;
  //justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;



`;

export const LayoutLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://img.freepik.com/free-vector/abstract-banner-with-low-poly-plexus-network-communications-design_1048-12914.jpg?w=1380&t=st=1669713144~exp=1669713744~hmac=987804d4702fe981b1680a6fe5531f748d2951fe1d1b61b4413bc79a26853606');
  background-size: 100% 100%;
`;

export const FormLogin = styled(Form)`
  width: 480px;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
`;

export const InputLogin = styled(Input)`
  border-radius: 8px;
  height: 45px;
`;

export const InputPassword = styled(Input.Password)`
  border-radius: 8px;
  height: 45px;
`;

export const NoteLogin = styled.span`
  color: #1890ff;
`;

export const ButtonLogin = styled(Button)`
  height: 45px;
  font-weight: bold;
  font-size: 18px;
`;

export const TilteLogin = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
`;

export const OptionLogin = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Container };
