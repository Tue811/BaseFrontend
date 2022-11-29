/**
 * ...
 */

import React from 'react';
import { Checkbox, Form, Input } from 'antd';
import {
  ButtonLogin,
  Container,
  FormLogin,
  InputLogin,
  InputPassword,
  LayoutLogin,
  NoteLogin,
  OptionLogin,
  TilteLogin,
} from './stylesLogin';
import Button from '../../res/components/Button';

const Login = () => {
  const login = () => {};

  return (
    <Container>
      <LayoutLogin>
        <FormLogin>
          <TilteLogin>Đăng nhập hệ thống quản lý sản phẩm</TilteLogin>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <InputLogin placeholder="Email hoặc số điện thoại" />
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <InputPassword placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item valuePropName="checked">
            <Checkbox>
              Đồng ý với <NoteLogin>Điều khoản sử dụng</NoteLogin>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <ButtonLogin>Đăng nhập</ButtonLogin>
          </Form.Item>
          <Form.Item>
            <OptionLogin>
              <a>Đăng ký</a>
              <a>Quên mật khẩu</a>
            </OptionLogin>
          </Form.Item>
        </FormLogin>
      </LayoutLogin>
    </Container>
  );
};

export default Login;
