import { Button, ButtonGroup } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { getProductList } from '../../DAO/productList/getProductList';

import ProductPopup from '../Organisms/popups/ProductPopup';

import _ from 'lodash';
import RadioButtonTable from '../Molecules/table/RadioButtonTable';
import { SupabaseRealtimePayload } from '@supabase/supabase-js';
import { runSupabase } from '../../service/initializeSuapbase';
import { RealTimeProductList } from '../../DAO/productList/RealTimeProductList';
import { useProductListStore } from '../../zustand/productList';
import { ProductListType } from '../../entries';

const ProductManagerTemplate = () => {
  console.log('init');
  
  const { productList, setProductList } = useProductListStore();
  const [isShownPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
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

  const matchData = {
    productList: useCallback((data: Array<ProductListType>): void => {
      setProductList(data);
    }, []),
  }
  const handleRecord = {
    realTimeProductListCallBack: {
      insert: (payload: SupabaseRealtimePayload<ProductListType>) => {
        console.log('payload', payload);
        console.log('productList', productList);
        if (payload.errors) return console.log(payload.errors);
        const cloneProductList = _.cloneDeep(productList);
        console.log('cloneProductList', cloneProductList);
        cloneProductList.push(payload.new);
        console.log('cloneProductList', cloneProductList);
        matchData.productList(cloneProductList);
      },
      update: (payload: SupabaseRealtimePayload<ProductListType>) => {
        console.log('payload ', payload);
      },
      delete: (payload: SupabaseRealtimePayload<ProductListType>) => {
        console.log('payload ', payload);
      },
    }
  }
  useEffect(() => {
    console.log('productList!!!', productList);
    window.addEventListener('click', () => {
      console.log('productList###', productList);
    })
  }, [productList]);
  useEffect(() => {
    getProductList(matchData.productList);
    const RealTimeProductListSingleTon = new RealTimeProductList();
    RealTimeProductListSingleTon.initProductListSubscription(
      handleRecord.realTimeProductListCallBack.insert,
      handleRecord.realTimeProductListCallBack.update,
      handleRecord.realTimeProductListCallBack.delete,
    );

    return () => {
      RealTimeProductListSingleTon.disableProductListSubscription();
    }
  }, []);

  return (
    <>
      <ProductPopup isShown={isShownPopup} title={popupTitle} onCloseEvent={handleClickEvent.togglePopup} />
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
          <RadioButtonTable columns={[
            { field: 'radio', headerName: '선택' },
            { field: 'index', headerName: '글 번호' },
            { field: 'productNumber', headerName: '상품 번호' },
            { field: 'barcodeNumber', headerName: '바코드 번호' },
            { field: 'productName', headerName: '상품명' },
            { field: 'productOption', headerName: '옵션명' },
            { field: 'packageUnit', headerName: '패키지 단위' },
            { field: 'packageMinUnitQuan', headerName: '패키지 당 낱개' },
            { field: 'minimumUnit', headerName: '낱개 단위' },
          ]} rows={productList} />
        </div>
      </div>
    </>
  );
};

export default ProductManagerTemplate;
