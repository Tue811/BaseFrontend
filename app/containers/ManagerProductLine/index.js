/**
 * ...
 */
import React, { useEffect, useState } from 'react';
import { Form } from 'antd';

import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  Add,
  BtnAdd,
  Contents,
  IconDelete,
  IconEdit,
  InputAddDes,
  InputAddName,
  InputSearch,
  PopUpAdd,
  TableProduct,
  TotalAcc,
} from './stylesManagerProductLine';
import * as actions from './actionsManagerProductLine';
import * as selectors from './selectorsManagerProductLine';
import reducer from './reducerManagerProductLine';
import saga from './sagaManagerProductLine';
import { REDUX_KEY } from '../../utils/constants';
import AddModal from './components/AddModal';

import { selectList } from './selectorsManagerProductLine';
import DeleteModal from './components/DeleteModal';
import EditModal from './components/EditModal';

const key = REDUX_KEY.managerProductLine;

const ManagerProductLine = () => {
  const columns = [
    {
      title: 'STT',
      width: '6%',
      dataIndex: 'number',
      key: 'number',
      align: 'center',
    },
    {
      title: 'Tên sản phẩm',
      width: 200,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      width: '35%',
    },
    {
      title: 'Thời gian tạo',
      dataIndex: 'createAt',
      key: 'createAt',
      width: 150,
    },
    {
      title: 'Chức năng',
      dataIndex: 'name',
      key: 'icon',
      width: 150,
      render: (text, record) => (
        <>
          <IconEdit
            onClick={() => {
              // khi click vao icon edit thi:
              setModalEdit(true); // hien thi popup edit
              console.log(record);
              setEditName(record.name); // lay gia tri name cua vi tri tuong ung
              setEditDes(record.description); // lay gia tri description o vi tri tuong ung
            }}
          />
          <IconDelete
            onClick={() => {
              // click vao icon delete thi:
              setModalDelete(true); // hien thi popup delete
              setRemoveId(record.id); // lay id cua vi tri tuong ung
            }}
          />
        </>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [removeId, setRemoveId] = useState('');
  const [editName, setEditName] = useState('');
  const [editDes, setEditDes] = useState('');
  const [form] = Form.useForm();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const listProduct = useSelector(selectors.selectList()); // lay danh sach tu API ve
  useEffect(() => {
    getList();
  }, []);
  // su dung useEffect de hien thi list ra man hinh, khi getListProduct thay doi thi nhay vao ham nay
  useEffect(() => {
    if (listProduct && listProduct.length !== 0) {
      setData(
        listProduct.map((item, index) => ({
          number: index + 1, // hien thi so thu tu
          ...item, // gia tri cua list
        })),
      );
    }
  }, [listProduct]);

  // su dung useEffect de hien thi ra danh sach san pham tim kiem
  useEffect(() => {
    dispatch(actions.list(searchInput));
  }, [searchInput]); // truyen gia tri searchInput

  const getList = () => {
    dispatch(actions.list());
  };

  // tu dong load lai danh sach san pham khi da add thanh cong
  const onClickFinish = () => {
    dispatch(actions.list(''));
  };

  const onClickDelete = () => {
    dispatch(actions.list(''));
  };

  const onClickEdit = () => {};

  return (
    <Contents>
      <InputSearch
        size="large"
        placeholder="Tìm kiếm theo Tên sản phẩm..."
        prefix={<SearchOutlined />}
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <Add>
        <TotalAcc>Quản lý tài khoản: {data.length}</TotalAcc>
        <BtnAdd onClick={() => setIsModalOpen(true)}>+ Thêm mới</BtnAdd>
      </Add>

      <TableProduct
        data={data}
        columns={columns}
        loading
        pagination
        scroll={{
          x: 1500,
        }}
      />
      <AddModal
        trigger={isModalOpen}
        setTrigger={setIsModalOpen}
        onClickFinish={onClickFinish}
      />
      <DeleteModal
        trigger={modalDelete}
        setTrigger={setModalDelete}
        onClickDelete={onClickDelete}
        id={removeId}
      />
      <EditModal
        trigger={modalEdit}
        setTrigger={setModalEdit}
        onClickFinish={onClickEdit}
        name={editName}
        description={editDes}
      />
    </Contents>
  );
};

export default ManagerProductLine;
