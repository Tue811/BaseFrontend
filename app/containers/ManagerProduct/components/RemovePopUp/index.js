import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import {
  IconNoteDelete,
  NoteDelete,
  PopUpAdd,
  PopUpDelete,
} from '../../StylesManagerProduct';

const RemovePopUp = ({ trigger, setTrigger }) => {
  const handleOk = () => {
    setTrigger(false);
  };
  const handleCancel = () => {
    setTrigger(false);
  };

  return trigger ? (
    <PopUpDelete
      title="Xóa sản phẩm"
      open={trigger}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Xóa"
      cancelText="Thoát"
    >
      <NoteDelete>
        <IconNoteDelete /> Bạn có chắc muốn xóa sản phẩm?
      </NoteDelete>
    </PopUpDelete>
  ) : (
    ''
  );
};

export default RemovePopUp;
