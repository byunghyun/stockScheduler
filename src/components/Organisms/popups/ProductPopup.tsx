import React, { MouseEventHandler, useCallback } from 'react'
import PopupContainer from '../../Layout/popup/PopupContainer';
import StylingMeterialInput from '../../Atoms/input/StylingMeterialInput';
import { Button, ButtonGroup } from '@material-ui/core';
import { useProductPopupStore } from '../../../zustand/productList/popup';
import _ from 'lodash';

//((event: MouseEventHandler<Element>) => void) | undefined
interface ProductPopupType {
 isShown: boolean;
 title: string;
 onClickEvent?: MouseEventHandler<HTMLButtonElement>;
 onCloseEvent: () => void;
}


const ProductPopup = ({isShown, title, onClickEvent, onCloseEvent}: ProductPopupType) => {
  const {
    productNumber,
    productName,
    productOption,
    barcodeNumber,
    packageUnit,
    packageMinUnitQuan,
    minimumUnit, 
    setProductNumber,
    setProductName,
    setProductOption,
    setBarcodeNumber,
    setPackageUnit,
    setPackageMinUnitQuan,
    setMinimumUnit,
  } = useProductPopupStore();

  const handleChangeEvent = {
    productNameValue: useCallback((event: { currentTarget: { value: string } }) => {
      const changeValue = event.currentTarget.value;
      setProductName(changeValue);
    }, [productName]),
    productOptionValue: useCallback((event: { currentTarget: { value: string } }) => {
      const changeValue = event.currentTarget.value;
      setProductOption(changeValue);
    }, [productOption]),
    barcodeNumberValue: useCallback((event: { currentTarget: { value: string } }) => {
      const changeValue = event.currentTarget.value;
      setBarcodeNumber(changeValue);
    }, [barcodeNumber]),
    packageUnitValue: useCallback((event: { currentTarget: { value: string } }) => {
      const changeValue = event.currentTarget.value;
      setPackageUnit(changeValue);
    }, [packageUnit]),
    packageMinUnitQuanValue: useCallback((event: { currentTarget: { value: string } }) => {
      const changeValue = event.currentTarget.value;
      setPackageMinUnitQuan(parseInt(changeValue));
    }, [packageMinUnitQuan]),
    minimumUnitValue: useCallback((event: { currentTarget: { value: string } }) => {
      const changeValue = event.currentTarget.value;
      setMinimumUnit(changeValue);
    }, [minimumUnit]),
  }
  return (
      <PopupContainer
       isShown={isShown}
       title={title}
       onClose={onCloseEvent}
       className='w-[600px]'
     >
       <p>* ????????? ?????? ???????????? ????????? ?????? ???????????????.</p>
       <StylingMeterialInput
         id='standard-basic'
         label='* ?????????'
         variant='standard'
         className='w-full'
         value={productName}
         sx={{
           marginTop: '30px',
         }}
         onChange={handleChangeEvent.productNameValue}
       />
       <StylingMeterialInput
         id='standard-basic'
         label='* ????????? ?????? (BOX, SET ??????)'
         variant='standard'
         className='w-full'
         value={packageUnit}
         sx={{
           marginTop: '30px',
         }}
         onChange={handleChangeEvent.packageUnitValue}
       />
       <StylingMeterialInput
         id='standard-basic'
         label='* ?????? ?????? (???, EA, m, g ??????)'
         variant='standard'
         className='w-full'
         value={minimumUnit}
         sx={{
           marginTop: '30px',
         }}
         onChange={handleChangeEvent.minimumUnitValue}
       />
       <StylingMeterialInput
         id='standard-basic'
         label='* ?????? ??? ?????? (??? ????????? ??? ??????)'
         variant='standard'
         className='w-full'
         value={packageMinUnitQuan}
         sx={{
           marginTop: '30px',
         }}
         onChange={handleChangeEvent.packageMinUnitQuanValue}
       />
       <StylingMeterialInput
         id='standard-basic'
         label='?????? ??????(??????, ????????? ???..)'
         variant='standard'
         className='w-full'
         value={productOption}
         sx={{
           marginTop: '30px',
         }}
         onChange={handleChangeEvent.productOptionValue}
       />
        <StylingMeterialInput
         id='standard-basic'
         label='????????? ??????'
         variant='standard'
         className='w-full'
         value={barcodeNumber}
         inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
         sx={{
          marginTop: '30px',
         }}
         onChange={handleChangeEvent.barcodeNumberValue}
       />      
       <div className='mt-8'>
         <Button variant='contained' color='primary' onClick={onClickEvent && onClickEvent}>
           {title}
         </Button>
       </div>
    </PopupContainer>
  )
}

export default ProductPopup