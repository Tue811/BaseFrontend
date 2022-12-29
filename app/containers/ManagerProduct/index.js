import React, { useEffect, useState } from 'react';
/**
 * ...
 */
import { Form } from 'antd';

import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  Add,
  BtnAdd,
  Contents,
  IconDelete,
  IconEdit,
  InputSearch,
  TableProduct,
  TotalAcc,
} from './StylesManagerProduct';

import * as actions from './actionsManagerProduct';
import * as selectors from './selectorsManagerPoduct';
import reducer from './reducerManagerProduct';
import saga from './sagaManagerProduct';
import { REDUX_KEY } from '../../utils/constants';
import AddPopUp from './components/AddPopUp';
import EditPopUp from './components/EditPopUp';
import RemovePopUp from './components/RemovePopUp';

const key = REDUX_KEY.managerProduct;

const ManagerProduct = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const columns = [
    {
      title: 'STT',
      width: '7%',
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
      width: '25%',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      width: 150,
    },
    {
      title: 'Khuyễn mãi',
      dataIndex: 'discount',
      key: 'discount',
      width: 150,
    },
    {
      title: 'Hoa hồng',
      dataIndex: 'bonus',
      key: 'bonus',
      width: 150,
    },
    {
      title: 'Tổng',
      dataIndex: 'total',
      key: 'total',
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
              setIsOpenEdit(true);
              // console.log('texxt', text);
              // console.log('record', record);
            }}
          />
          <IconDelete
            onClick={() => {
              setIsOpenDelete(true);
            }}
          />
        </>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const getListProduct = useSelector(selectors.selectList());

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setData(getListProduct);
    console.log(getListProduct);
  }, [getListProduct]);

  // Lấy danh sách search, khi nào inputSearch thay đổi thì vào đây //
  useEffect(() => {
    dispatch(actions.list(inputSearch));
  }, [inputSearch]);

  const getList = () => {
    dispatch(actions.list());
    dispatch(actions.getProductLine());
  };

  const onClickAdd = () => {
    dispatch(actions.list(''));
    console.log(getList());
  };

  return (
    <Contents>
      <InputSearch
        size="large"
        placeholder="Tìm kiếm theo Tên đăng nhập, Tên đầy đủ, Số điện thoại"
        prefix={<SearchOutlined />}
        value={inputSearch}
        onChange={e => setInputSearch(e.target.value)}
      />
      <Add>
        <TotalAcc>Quản lý tài khoản: {getListProduct.length}</TotalAcc>
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
      {isModalOpen && (
        <AddPopUp
          trigger={isModalOpen}
          setTrigger={setIsModalOpen}
          onClickFinish={onClickAdd}
        />
      )}
      <EditPopUp trigger={isOpenEdit} setTrigger={setIsOpenEdit} />
      <RemovePopUp trigger={isOpenDelete} setTrigger={setIsOpenDelete} />
    </Contents>
  );
};

export default ManagerProduct;
