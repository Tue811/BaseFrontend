import React from 'react';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { PopUpAdd, PopUpDelete } from '../../stylesManagerProductLine';
import * as actions from '../../actionsManagerProductLine';

const DeleteModal = ({ trigger, setTrigger, onClickDelete, id }) => {
  const dispatch = useDispatch();
  // ham lay id khi click vao ok
  const handleOk = () => {
    dispatch(
      actions.remove(id, () => {
        console.log(id);
        onClickDelete();
        setTrigger(false);
      }),
    );
  };
  const handleCancel = () => {
    setTrigger(false);
  };
  return trigger ? (
    <PopUpDelete
      title="Xóa dòng sản phẩm"
      open={trigger}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Xóa"
      cancelText="Thoát"
    >
      <p>Bạn có chắc muốn xóa sản phẩm này không</p>
    </PopUpDelete>
  ) : (
    ''
  );
};
export default DeleteModal;
