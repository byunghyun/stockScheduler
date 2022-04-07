import React, { useEffect } from 'react';
import Radio from '@mui/material/Radio';
import { ProductListType } from '../../../entries';
import { useProductListStore } from '../../../zustand/productList';

const RadioButtonTable = ({
 tableTitle, 
 columns, 
 rows,
 className,
 ...rest
}: {
 tableTitle?: string, 
 columns: Array<{ field: string, headerName: string, width?: string | number }>, 
 rows: Array<ProductListType>,
 className?: string,
 rest?: Array<string>,
}) => {
  const { selectedProductIndex, setSelectedProductIndex } = useProductListStore();
 console.log('rows', rows);
 const handleChange = (event: {
   target: { value: string };
 }) => {
   const changeSelected = parseInt(event.target.value);
   setSelectedProductIndex(changeSelected);
 };
 const controlProps = (item: number) => ({
   checked: selectedProductIndex === item,
   onChange: handleChange,
   value: item.toString(),
   name: tableTitle ?? Math.random().toString(36).substr(2, 9),
   // name값 공백 시 무작위로 넣어줌
   inputProps: { 'aria-label': item.toString() },
 });
  return (
   <table className={`w-full listTable flex-1 ` + className} {...rest}>
    <thead>
      <tr>
       {
        columns.map((column, index) => {
         return (
          <th key={index.toString()} className='sticky z-10 top-0'>{column.headerName}</th>
         );
        })
       }
      </tr>
    </thead>
    <tbody>
      {
        rows.map((item: any, rowsIndex: number) => {
         return (
           <tr key={rowsIndex.toString()}>
            {
              columns.map((column, columnsIndex) => {
               switch (column.field) {
                case 'radio' :
                 return (
                  <td key={columnsIndex.toString()}>
                    <Radio
                      {...controlProps(item.productIndex)}
                      sx={{
                        color: '#6366f1',
                        '&.Mui-checked': {
                          color: '#6366f1',
                        },
                      }}
                    />
                  </td>
                 );
                break;
                case 'index' :
                 return <td key={columnsIndex.toString()}>{rowsIndex + 1}</td>;
                break;
                default: return <td key={columnsIndex.toString()}>{item[column.field]}</td>;
                break;
               }
              })
            }
           </tr>
          )
       })
      }
    </tbody>
   </table>
  )
}

export default RadioButtonTable

