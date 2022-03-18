import { Button, ButtonGroup } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import React from 'react';

import { stockListMocks } from '../../mocks/stockList';
import { stockListType } from '../../mocks/stockList/type';

const StockManagerTemplate = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'stockManagerList',
    inputProps: { 'aria-label': item },
  });
  return (
    <>
      <div className='btnGroup pb-6 '>
        <ButtonGroup
          aria-label='contained primary button group'
          className='mt-8'
        >
          {/* <Button variant="outlined">바코드 입/출고</Button> */}
          <Button variant='outlined' color='primary'>
            입고
          </Button>
          <Button variant='outlined' color='secondary'>
            출고
          </Button>
          <Button variant='outlined'>폐기</Button>
        </ButtonGroup>
      </div>
      <div className='flex flex-col flex-1 bg-white overflow-y-auto'>
        <header className='w-full h-[60px] leading-[60px] text-[1.25rem] pl-[1.5rem]'>
          재고 관리
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
              {stockListMocks.map((item: stockListType, index: number) => {
                return (
                  <tr key={item.stockIndex.toString()}>
                    <td>
                      <Radio
                        {...controlProps('a')}
                        sx={{
                          color: '#6366f1',
                          '&.Mui-checked': {
                            color: '#6366f1',
                          },
                        }}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>333</td>
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
  );
};

export default StockManagerTemplate;
