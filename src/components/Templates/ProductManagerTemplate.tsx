import { Button, ButtonGroup } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import React, { useEffect, useState } from 'react';

import { productListMocks } from '../../mocks/productList';
import { productListType } from '../../mocks/productList/type';
import StylingMeterialInput from '../Atoms/input/StylingMeterialInput';
import PopupContainer from '../Molecules/popup/PopupContainer';

const ProductManagerTemplate = () => {
  const [selectedValue, setSelectedValue] = React.useState('');
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    console.log('event', event);
    setSelectedValue(event.target.value);
  };
  const [isShownPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'productManagerList',
    inputProps: { 'aria-label': item },
  });
  const handleClickEvent = {
    registProduct: (event: { preventDefault: () => void }) => {
      event.preventDefault();
      setPopupTitle('상품 등록');
      handleClickEvent.togglePopup();
    },
    modifyProduct: (event: { preventDefault: () => void }) => {
      event.preventDefault();
      setPopupTitle('상품 수정');
      handleClickEvent.togglePopup();
    },
    togglePopup: () => {
      setShowPopup((selectedValue) => !selectedValue);
    },
  };

  return (
    <>
      <PopupContainer
        isShown={isShownPopup}
        title={popupTitle}
        onClose={handleClickEvent.registProduct}
        className='w-[600px]'
      >
        <StylingMeterialInput
          id='standard-basic'
          label='바코드 번호'
          variant='standard'
          className='w-full'
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          sx={{
            marginTop: '0',
          }}
        />
        <StylingMeterialInput
          id='standard-basic'
          label='상품명'
          variant='standard'
          className='w-full'
          sx={{
            marginTop: '30px',
          }}
        />
        <StylingMeterialInput
          id='standard-basic'
          label='옵션명'
          variant='standard'
          className='w-full'
          sx={{
            marginTop: '30px',
          }}
        />
        <StylingMeterialInput
          id='standard-basic'
          label='패키지 단위'
          variant='standard'
          className='w-full'
          sx={{
            marginTop: '30px',
          }}
        />
        <StylingMeterialInput
          id='standard-basic'
          label='낱개 단위'
          variant='standard'
          className='w-full'
          sx={{
            marginTop: '30px',
          }}
        />
        <StylingMeterialInput
          id='standard-basic'
          label='입고 수량'
          variant='standard'
          className='w-full'
          sx={{
            marginTop: '30px',
          }}
        />
        <div className='mt-8'>
          <Button variant='contained' color='primary'>
            {popupTitle}
          </Button>
        </div>
      </PopupContainer>
      <div className='btnGroup pb-8 '>
        <ButtonGroup
          aria-label='contained primary button group'
          className='mt-8'
        >
          <Button variant='outlined' onClick={handleClickEvent.registProduct}>
            상품 등록
          </Button>
          <Button
            variant='outlined'
            color='primary'
            onClick={handleClickEvent.modifyProduct}
          >
            상품 수정
          </Button>
          <Button variant='outlined' color='secondary'>
            상품 삭제
          </Button>
        </ButtonGroup>
      </div>
      <div className='flex flex-col flex-1 bg-white overflow-y-auto'>
        <header className='w-full h-[60px] leading-[60px] text-[1.25rem] pl-[1.5rem]'>
          상품 관리
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
                <th className='sticky z-10 top-0'>패키지 단위</th>
                <th className='sticky z-10 top-0'>패키지 당 낱개</th>
                <th className='sticky z-10 top-0'>낱개 단위</th>
              </tr>
            </thead>
            <tbody>
              {productListMocks.map((item: productListType, index: number) => {
                return (
                  <tr key={item.productIndex.toString()}>
                    <td>
                      <Radio
                        {...controlProps(item.productIndex.toString())}
                        sx={{
                          color: '#6366f1',
                          '&.Mui-checked': {
                            color: '#6366f1',
                          },
                        }}
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td>{item.productNumber}</td>
                    <td>{item.barcodeNumber}</td>
                    <td>{item.productName}</td>
                    <td>
                      {item.productOption ? item.productOption : '미등록'}
                    </td>
                    <td>{item.packageUnit}</td>
                    <td>{item.packageMinUnitQuan}</td>
                    <td>{item.minimunUnit}</td>
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

export default ProductManagerTemplate;
