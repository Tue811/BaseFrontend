import { Table } from 'antd';
import styled from 'styled-components';

export const TableTest = styled(Table)`
  width: 100%;

  .ant-table {
    font-size: 1em;
    color: #000;
    font-weight: 400;
    border: 1px solid #c5ced9;
    border-radius: 20px;
  }

  .ant-table-container table > thead > tr:first-child th:first-child {
    border-top-left-radius: 20px;
  }

  .ant-table-container table > thead > tr:first-child th:last-child {
    border-top-right-radius: 20px;
  }

  .ant-table-thead > tr > th {
    background: #c5ced9;
    font-weight: bold;
  }
`;
