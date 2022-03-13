import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDashboardStore } from '../../../zustand/dashBoard';
import { rows } from './mocks/rows';

const DenseTable = () => {
  const { outOfStockList, setOutOfStockListData } = useDashboardStore();
  useEffect(() => {
    setOutOfStockListData(rows);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {outOfStockList.length ?
        <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>제품 명</TableCell>
                <TableCell align="right">남은 수량</TableCell>
                <TableCell align="right">주간 출고 수량</TableCell>
                <TableCell align="right">월간 출고 수량</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {outOfStockList.map((row) => (
                <TableRow
                  key={row.productName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.productName}
                  </TableCell>
                  <TableCell align="right">{row.totalStock}</TableCell>
                  <TableCell align="right">{row.weeklyShipments}</TableCell>
                  <TableCell align="right">{row.monthlyShipments}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          :
        <div className='w-full center py-8'>
          부족한 재고가 없습니다.
        </div>
      }
    </>
  );
}

export default DenseTable;