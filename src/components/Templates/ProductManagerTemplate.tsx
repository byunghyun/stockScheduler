import { Button, ButtonGroup } from '@material-ui/core';
import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { getProductList } from '../../DAO/productList/getProductList';

import ProductPopup from '../Organisms/popups/ProductPopup';

import _ from 'lodash';
import RadioButtonTable from '../Molecules/table/RadioButtonTable';
import { PostgrestError, SupabaseRealtimePayload } from '@supabase/supabase-js';
import { runSupabase } from '../../service/initializeSuapbase';
import { RealTimeProductList } from '../../DAO/productList/RealTimeProductList';
import { useProductListStore } from '../../zustand/productList';
import { ProductListType } from '../../entries';
import { addProductObject } from '../../DAO/productList/addProductObject';
import { productObjectDTO } from '../../DTO/productList/productObjectDTO';
import { ConvertClassToPlain } from '../../util/ConvertClassToPlain';
import { useProductPopupStore } from '../../zustand/productList/popup';
import { toastify } from '../../util/AlertToast';
import { deleteProductObject } from '../../DAO/productList/deleteProductObject';
import { updateProductObject } from '../../DAO/productList/updateProductObject';

const ProductManagerTemplate = () => {
  const {
    productList,
    selectedProductIndex,
    setProductList,
    setSelectedProductIndex,
  } = useProductListStore();
  const {
    isShownPopup,
    popupTitle,
    productNumber,
    productName,
    productOption,
    barcodeNumber,
    packageUnit,
    packageMinUnitQuan,
    minimumUnit,
    setShowPopup,
    setPopupTitle,
    setResetPopup,
    setProductNumber,
    setProductName,
    setProductOption,
    setBarcodeNumber,
    setPackageUnit,
    setPackageMinUnitQuan,
    setMinimumUnit,
  } = useProductPopupStore();

  const [] = useState();
  const RealTimeProductListSingleTon = new RealTimeProductList();
  const handleClickEvent = {
    openRegistProductPopup: (event: { preventDefault: () => void }): void => {
      event.preventDefault();
      setPopupTitle('?????? ??????');
      handleClickEvent.toggleProductPopup();
    },
    openModifyProductPopup: (event: { preventDefault: () => void }): void => {
      event.preventDefault();
      if(selectedProductIndex === 0) return toastify.warn('????????? ????????? ??????????????????.');
      setPopupTitle('?????? ??????');
      handleClickEvent.toggleProductPopup();
      const selectProduct = productList.filter((produce, index) => {
        return (
          produce.productIndex === selectedProductIndex
        );
      });
      console.log('selectProduct', selectProduct);
      if (selectProduct.length) {
        setProductNumber(selectProduct[0].productNumber ?? '');
        setProductName(selectProduct[0].productName ?? '');
        setProductOption(selectProduct[0].productOption ?? '');
        setBarcodeNumber(selectProduct[0].barcodeNumber ?? '');
        setPackageUnit(selectProduct[0].packageUnit ?? '');
        setPackageMinUnitQuan(selectProduct[0].packageMinUnitQuan ?? 1);
        setMinimumUnit(selectProduct[0].minimumUnit  ?? '');
      }
    },
    deleteSelectedProduct: async (event: { preventDefault: () => void }): Promise<void> => {
      event.preventDefault();
      if(selectedProductIndex === 0) return toastify.warn('????????? ????????? ??????????????????.');
      deleteProductObject(selectedProductIndex);
    },
    toggleProductPopup: (): void => {
      if(isShownPopup) handleClickEvent.resetPopup();
      setShowPopup(!isShownPopup);
    },
    resetPopup: (): void => {
      setResetPopup(true);
    },
    submitRegistProduct: (event: any) => {
      const createProductObject: Partial<ProductListType> = new productObjectDTO(
        1,
        1,
        productNumber,
        productName,
        productOption,
        barcodeNumber,
        packageUnit,
        packageMinUnitQuan,
        minimumUnit,
      );
      const convertPlainObject = new ConvertClassToPlain();
      convertPlainObject.setClassToPlain = createProductObject;
      if(popupTitle === '?????? ??????') {
        updateProductObject(
          convertPlainObject.getClassToPlain,
          selectedProductIndex,
          handleClickEvent.toggleProductPopup,
          handleClickEvent.toggleProductPopup,
          handleClickEvent.resetPopup
        );
      } else if(popupTitle === '?????? ??????'){
        addProductObject(
          convertPlainObject.getClassToPlain,
          handleClickEvent.toggleProductPopup,
          handleClickEvent.toggleProductPopup,
          handleClickEvent.resetPopup
        );
      }
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
        if (payload.errors) return console.log(payload.errors);
        const cloneProductList = _.cloneDeep(productList);
        cloneProductList.push(payload.new);
        matchData.productList(cloneProductList);
      },
      update: (payload: SupabaseRealtimePayload<ProductListType>) => {
        if (payload.errors) return console.log(payload.errors);
        const updatedIndexNumber = payload.old.productIndex;
        const cloneProductList = _.cloneDeep(productList);
        const updatedProductObject = cloneProductList.findIndex((product, index) => {
          return (
            product.productIndex === updatedIndexNumber
          )
        });
        cloneProductList[updatedProductObject] = payload.new;
        matchData.productList(cloneProductList);
      },
      delete: (payload: SupabaseRealtimePayload<ProductListType>) => {
        if (payload.errors) return console.log(payload.errors);
        const deletedIndexNumber = payload.old.productIndex;
        const cloneProductList = _.cloneDeep(productList);
        const updatedProductList = cloneProductList.filter((product, index) => {
          return (
            product.productIndex !== deletedIndexNumber
          )
        });
        matchData.productList(updatedProductList);
      },
    }
  }
  useEffect(() => {
    console.info(`%c -init productList useEffect`, `color: green`);
    RealTimeProductListSingleTon.initProductListSubscription(
      handleRecord.realTimeProductListCallBack.insert,
      handleRecord.realTimeProductListCallBack.update,
      handleRecord.realTimeProductListCallBack.delete,
    );
  }, [productList]);
  useEffect(() => {
    console.info(`%c -init default useEffect`, `color: green`);
    getProductList(matchData.productList);
    return () => {
      console.info(`%c -cleanUp default useEffect`, `color: green`);
      RealTimeProductListSingleTon.disableProductListSubscription();
    }
  }, []);

  return (
    <>
      <ProductPopup 
        isShown={isShownPopup}
        title={popupTitle}
        onClickEvent={handleClickEvent.submitRegistProduct}
        onCloseEvent={handleClickEvent.toggleProductPopup} 
      />
      <div className='btnGroup pb-8 '>
        <ButtonGroup
          aria-label='contained primary button group'
          className='mt-8'
        >
          <Button variant='outlined' onClick={handleClickEvent.openRegistProductPopup}>
            ?????? ??????
          </Button>
          <Button
            variant='outlined'
            color='primary'
            onClick={handleClickEvent.openModifyProductPopup}
          >
            ?????? ??????
          </Button>
          <Button variant='outlined' color='secondary' onClick={handleClickEvent.deleteSelectedProduct}>
            ?????? ??????
          </Button>
        </ButtonGroup>
      </div>
      <div className='flex flex-col flex-1 bg-white overflow-y-auto'>
        <header className='w-full h-[60px] leading-[60px] text-[1.25rem] pl-[1.5rem]'>
          ?????? ??????
        </header>
        <div className='h-full overflow-y-auto'>
          <RadioButtonTable columns={[
            { field: 'radio', headerName: '??????' },
            { field: 'index', headerName: '??? ??????' },
            // { field: 'productNumber', headerName: '?????? ??????' },
            { field: 'barcodeNumber', headerName: '????????? ??????' },
            { field: 'productName', headerName: '?????????' },
            { field: 'productOption', headerName: '?????????' },
            { field: 'packageUnit', headerName: '????????? ??????' },
            { field: 'packageMinUnitQuan', headerName: '????????? ??? ??????' },
            { field: 'minimumUnit', headerName: '?????? ??????' },
          ]} rows={productList} />
        </div>
      </div>
    </>
  );
};

export default ProductManagerTemplate;


