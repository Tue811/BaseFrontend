/**
 * ...
 */
import styled from 'styled-components';
import { Form, Input, Layout } from 'antd';
import { max } from 'lodash/math';
import { triggerFocus } from 'antd/es/input/Input';
import Button from '../../res/components/Button';
export const SiteLayout = styled(Layout)`
  padding: 0;
`;

export const MenuLogo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px 20px;
`;

export const Logo = styled.div`
  margin-left: 20px;
`;
