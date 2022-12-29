import { Button, Form, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import {
  InputAddDes,
  InputAddName,
  PopUpAdd,
} from '../../stylesManagerProductLine';
import * as actions from '../../actionsManagerProductLine';

const AddModal = ({ trigger, setTrigger, onClickFinish }) => {
  const [form] = Form.useForm();
  // ham callback
  const callbackUploadAvatar = data => {
    // ham body gom cac gia tri trong form va id anh
    const body = {
      ...form.getFieldsValue(),
      imageId: data,
    };
    // dispatch den add trong actions
    dispatch(
      actions.add(body, () => {
        onClickFinish();
        setTrigger(false);
      }),
    );
  };
  // khi click nut ok thi chay vao day
  const handleOk = () => {
    form.validateFields().then(() => {
      const formData = new FormData();
      formData.append('file', image);
      dispatch(actions.uploadImage(formData, callbackUploadAvatar));
    });
  };
  const [image, setImage] = useState('');
  // const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  // ham thay doi cua upload img
  const handleChange = e => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };
  const handleCancel = () => {
    setTrigger(false);
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
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên sản phẩm!',
            },
          ]}
        >
          <InputAddName placeholder="Tên sản phẩm" required />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mô tả sản phẩm!',
            },
          ]}
        >
          <InputAddDes rows={4} placeholder="Mô tả" required />
        </Form.Item>
        <Form.Item>
          <input type="file" onChange={handleChange} />
        </Form.Item>
      </Form>
    </PopUpAdd>
  ) : (
    ''
  );
};
export default AddModal;
