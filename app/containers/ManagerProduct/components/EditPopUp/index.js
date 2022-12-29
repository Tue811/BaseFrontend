// phim tat 'rsc'

import React from 'react';
import { Form, Select } from 'antd';
import {
  InputAddDes,
  InputAddName,
  InputPrice,
  PopUpAdd,
} from '../../StylesManagerProduct';

const EditPopUp = ({ trigger, setTrigger }) => {
  const [form] = Form.useForm();
  const handleOk = () => {
    setTrigger(false);
  };
  const handleCancel = () => {
    setTrigger(false);
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };
  return trigger ? (
    <PopUpAdd
      title="Thêm mới sản phẩm"
      open={trigger}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Thêm"
      cancelText="Thoát"
    >
      <Form form={form}>
        <Form.Item name="name">
          <InputAddName placeholder="Tên sản phẩm" required />
        </Form.Item>
        <Form.Item name="description">
          <InputAddDes rows={4} placeholder="Mô tả" required />
        </Form.Item>
        <Form.Item>
          <InputPrice placeholder="Giá" />
        </Form.Item>
        <Form.Item>
          <InputPrice placeholder="Khuyến mãi giảm giá(%)" />
        </Form.Item>
        <Form.Item>
          <InputPrice placeholder="Hoa hồng" />
        </Form.Item>
        <Form.Item>
          <Select
            defaultValue="lucy"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'disabled',
                disabled: true,
                label: 'Disabled',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
            ]}
          />
        </Form.Item>
      </Form>
    </PopUpAdd>
  ) : (
    ''
  );
};

export default EditPopUp;
