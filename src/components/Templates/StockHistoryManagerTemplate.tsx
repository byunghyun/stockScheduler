import React from 'react'
import {ButtonGroup, Button} from '@material-ui/core';
import Radio from '@mui/material/Radio';
import { stockListMocks } from '../../mocks/stockList'
import { stockListType } from '../../mocks/stockList/type'

const StockHistoryManagerTemplate = () => {
  return (
   <>
     <div className='flex flex-col flex-1 bg-white overflow-y-auto'>
        <header className='w-full h-[60px] leading-[60px] text-[1.25rem] pl-[1.5rem]'>
          변경 내역 리스트
        </header>
        <div className='h-full overflow-y-auto'>
          <table className='w-full listTable flex-1'>
            <thead>
              <tr>
                <th className='sticky z-10 top-0'>선택</th>
                <th className='sticky z-10 top-0'>글 번호</th>
                <th className='sticky z-10 top-0'>상품 번호</th>
                <th className='sticky z-10 top-0'>바코드 번호</th>
                <th className='sticky z-10 top-0'>상품명</th>
                <th className='sticky z-10 top-0'>옵션명</th>
                <th className='sticky z-10 top-0'>패키지 수량</th>
                <th className='sticky z-10 top-0'>낱개 수량</th>
                <th className='sticky z-10 top-0'>주간 출고량</th>
              </tr>
            </thead>
            <tbody>
              {stockListMocks.map((item, index) => {
                return (
                  <tr key={item.stockIndex.toString()}>
                    <td>{index + 1}</td>
                    <td>{'123'}</td>
                    <td>{'qwf'}</td>
                    <td>333</td>
                    <td>333</td>
                    <td>333</td>
                    <td>333</td>
                    <td>333</td>
                    <td>333</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default StockHistoryManagerTemplate