import React from 'react'
import {ButtonGroup, Button} from '@material-ui/core';
import MaterialTable from 'material-table'

const StockManagerTemplate = () => {
  return (
   <>
     {/* <InvenReg invenRegModal={invenRegModal} changeInvenRegModal={changeInvenRegModal} invenTitle={invenTitle} /> */}
     <div className="btnGroup">
       <ButtonGroup aria-label="contained primary button group" className='mt-8'>
           <Button variant="outlined">바코드 입/출고</Button>
           <Button variant="outlined" color="primary">입고</Button>
           <Button variant="outlined" color="secondary">출고</Button>
       </ButtonGroup>
       <Button
           variant="outlined"
           color="secondary"
           style={{marginLeft: '10px', marginTop: '-2px'}}
       >
           폐기
       </Button>
     </div>
     <div className='mt-6'>
       <MaterialTable
         style={{height:'100%'}}
         columns={[
           { title: '선택', field: 'selected' },
           { title: '번호', field: 'indexNumber', type: 'numeric' },
           { title: '상품 번호', field: 'productNumber', type: 'numeric' },
           { title: '바코드 번호', field: 'barcodeNumber', type: 'numeric' },
           { title: '상품명', field: 'productName' },
           { title: '패키지 수량', field: 'packageQuantity', type: 'numeric' },
           { title: '낱개 수량', field: 'individualQuantity', type: 'numeric' },
           { title: '주간 출고량', field: 'WeeklyShipments', type: 'numeric' },
         ]}
         data={
          [
            { 
             selected: 'qweqe', 
             indexNumber: 'Baran', 
             productNumber: 1987, 
             barcodeNumber: 63, 
             productName:324, 
             packageQuantity:123, 
             individualQuantity:123, 
             WeeklyShipments: 12
            }
          ]
         }
         title="재고 관리"
       />
     </div>
  </>
  )
}

export default StockManagerTemplate