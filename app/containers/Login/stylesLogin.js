/**
 * ...
 */

import styled from 'styled-components';
import { Form, Input } from 'antd';
import { max } from 'lodash/math';
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
  background-image: url('https://i.pinimg.com/originals/cf/12/43/cf12430b97af777d1f6ac4e82f1bd5da.jpg');
  background-size: 100% 100%;
  @media (max-width: 450px) {
    background-size: cover;
  }
  @media (max-width: 768px) {
    background-size: cover;
  }
`;

export const FormLogin = styled(Form)`
  width: 480px;
  background-color: rgba(255, 255, 255, 1);
  padding: 40px;
  border-radius: 10px;
  @media (max-width: 450px) {
    background-color: rgba(255, 255, 255, 0);
    font-size: 12px;
  }
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0);
  }
`;

export const InputLogin = styled(Input)`
  border-radius: 8px;
  height: 45px;
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const InputPassword = styled(Input.Password)`
  border-radius: 8px;
  height: 45px;
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const NoteLogin = styled.span`
  color: #1890ff;
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const ButtonLogin = styled(Button)`
  height: 45px;
  font-weight: bold;
  font-size: 18px;
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const TilteLogin = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;
  @media (max-width: 450px) {
    font-size: 22px;
  }
`;

export const OptionLogin = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export { Container };
