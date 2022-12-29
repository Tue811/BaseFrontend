/**
 * ...
 */

import React, { useEffect } from 'react';
import { Checkbox, Form } from 'antd';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import { REDUX_KEY, COOKIES } from 'utils/constants';
import { access } from '@babel/core/lib/config/validation/option-assertions';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
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

import * as actions from './actionsLogin';
import reducer from './reducerLogin';
import saga from './sagaLogin';

const key = REDUX_KEY.login;

const Login = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const history = useHistory();

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  // useEffect(() => {
  //   if (accessToken !== '') {
  //     history.push('/ManagerProductLine');
  //   }
  // });

  const onClickLogin = () => {
    form.validateFields().then(() => {
      dispatch(
        actions.login(form.getFieldsValue(), data => {
          Cookies.set(COOKIES.access_token, data.token);
          history.push('/manager-product');
        }),
      );
    });
  };

  return (
    <Container>
      <LayoutLogin>
        <FormLogin form={form}>
          <TilteLogin>Đăng nhập hệ thống quản lý sản phẩm</TilteLogin>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email hoặc số điện thoại!',
              },
            ]}
          >
            <InputLogin placeholder="Email hoặc số điện thoại" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu!',
              },
            ]}
          >
            <InputPassword placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                      new Error('Hãy đồng ý với điều khoản sử dụng!'),
                    ),
              },
            ]}
          >
            <Checkbox>
              Đồng ý với <NoteLogin>Điều khoản sử dụng</NoteLogin>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <ButtonLogin onClick={onClickLogin}>Đăng nhập</ButtonLogin>
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
