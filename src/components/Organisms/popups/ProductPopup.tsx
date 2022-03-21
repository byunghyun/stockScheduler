import React from 'react'
import PopupContainer from '../../Molecules/popup/PopupContainer';
import StylingMeterialInput from '../../Atoms/input/StylingMeterialInput';
import { Button, ButtonGroup } from '@material-ui/core';

interface ProductPopupType {
 isShown: boolean;
 title: string;
 onCloseEvent: () => void;
}

const ProductPopup = ({isShown, title, onCloseEvent}: ProductPopupType) => {
  return (
      <PopupContainer
       isShown={isShown}
       title={title}
       onClose={onCloseEvent}
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
           {title}
         </Button>
       </div>
    </PopupContainer>
  )
}

export default ProductPopup