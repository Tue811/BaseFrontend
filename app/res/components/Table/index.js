import React from 'react';
import { TableTest } from './styles';

const TableCustom = ({ data, columns, isLoading, scroll }) => (
  <TableTest
    dataSource={data}
    columns={columns}
    loading={isLoading}
    pagination={scroll}
  />
);

export default TableCustom;
