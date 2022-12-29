// phim tat 'rsc'

import React, { useEffect, useState } from 'react';
import { Form, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { value } from 'lodash/seq';
import {
  InputAddDes,
  InputAddName,
  InputPrice,
  PopUpAdd,
} from '../../StylesManagerProduct';
import * as actions from '../../actionsManagerProduct';
import * as selectors from '../../selectorsManagerPoduct';

const AddPopUp = ({ trigger, setTrigger, onClickFinish }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [image, setImage] = useState('');
  const [dataPrLine, setDataPrLine] = useState([]);
  const [groupPrLine, setGroupPrLine] = useState('');
  const getListProductLine = useSelector(selectors.selectListProductLine());

  const getList = () => {
    dispatch(actions.getProductLine());
  };

  const callbackUploadAvatar = data => {
    // ham body gom cac gia tri trong form va id anh
    // form.validateFields().then(value => {
    const imgId = () => {};
    const body = {
      ...form.getFieldsValue(),
      listIdAvatar: [data],
      idBonusType: 1,
    };
    console.log(data);
    dispatch(
      actions.add(body, () => {
        console.log(body);
        onClickFinish();
        setTrigger(false);
      }),
    );
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setDataPrLine(
      getListProductLine.map(item => ({
        value: item.id,
        label: item.name,
      })),
    );

    console.log(getListProductLine);
    console.log(groupPrLine);
    console.log(dataPrLine);
  }, [getListProductLine]);

  const handleOk = () => {
    // if (image) {
    //   dispatch(
    //     actions.uploadImg(image, idImage => {
    //       callbackUploadAvatar(idImage);
    //     }),
    //   );
    // }
    form.validateFields().then(() => {
      const formData = new FormData();
      formData.append('file', image);
      dispatch(actions.uploadImg(formData, callbackUploadAvatar));
    });
    // setTrigger(false);
  };
  const handleCancel = () => {
    setTrigger(false);
  };

  // const handleChangeProductLine = value => {
  //   setIdProductLine(value);
  //   console.log(value);
  // };

  const handleChangeFile = e => {
    setImage(e.target.files[0]);
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
        <Form.Item name="total">
          <InputPrice placeholder="Tổng số sản phẩm" />
        </Form.Item>
        <Form.Item name="price">
          <InputPrice placeholder="Giá" />
        </Form.Item>
        <Form.Item name="discount">
          <InputPrice placeholder="Khuyến mãi giảm giá(%)" />
        </Form.Item>
        <Form.Item name="bonus">
          <InputPrice placeholder="Hoa hồng" />
        </Form.Item>
        <Form.Item>
          <input type="file" onChange={handleChangeFile} />
        </Form.Item>
        <Form.Item name="productLineId">
          <Select
            value={groupPrLine}
            defaultValue={[
              {
                value: '00000000-0000-0000-0000-000000000000',
                label: 'Tất cả',
              },
            ]}
            style={{
              width: 120,
            }}
            onChange={e => setGroupPrLine(e.target.value)}
            options={dataPrLine}
          />
        </Form.Item>
      </Form>
    </PopUpAdd>
  ) : (
    ''
  );
};

AddPopUp.propTypes = {
  trigger: PropTypes.bool,
  setTrigger: PropTypes.func,
  onClickFinish: PropTypes.func,
};

export default AddPopUp;
