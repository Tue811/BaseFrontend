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

const EditModal = ({
  trigger,
  setTrigger,
  onClickFinish,
  name,
  description,
}) => {
  const [form] = Form.useForm();
  // tuong tu AddModal
  const callbackUploadAvatar = data => {
    const body = {
      ...form.getFieldsValue(),
      imageId: data,
    };
    dispatch(
      actions.add(body, () => {
        onClickFinish();
        setTrigger(false);
      }),
    );
  };

  const handleOk = () => {
    form.validateFields().then(() => {
      // kiem tra dieu kien cua form
      const formData = new FormData();
      formData.append('file', image);
      dispatch(actions.uploadImage(formData, callbackUploadAvatar));
    });
  };
  const [image, setImage] = useState('');
  // const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const handleChange = e => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };
  const handleCancel = () => {
    setTrigger(false);
  };

  // khi click vao edit thi se hien thi gia tri trong form cua vi tri ma click vao ngay khi mo popup len
  useEffect(() => {
    form.setFieldsValue({ name, description });
  }, [name, description]);

  return trigger ? (
    <PopUpAdd
      title="Chỉnh sửa thông tin thẻ"
      open={trigger}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Thêm" // thay doi text cua ok
      cancelText="Thoát" // thay doi text cua cancle
    >
      <Form form={form}>
        <Form.Item
          name="name"
          rules={[
            // dieu kien cua form
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
            // dieu kien cua form
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
export default EditModal;
