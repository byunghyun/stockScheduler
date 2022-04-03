import React, { useEffect } from 'react';
import Radio from '@mui/material/Radio';
import { ProductListType } from '../../../entries';

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
 console.log('rows', rows);
 const [selectedValue, setSelectedValue] = React.useState('');
 const handleChange = (event: {
   target: { value: React.SetStateAction<string> };
 }) => {
   setSelectedValue(event.target.value);
 };
 const controlProps = (item: string) => ({
   checked: selectedValue === item,
   onChange: handleChange,
   value: item,
   name: tableTitle ?? Math.random().toString(36).substr(2, 9),
   inputProps: { 'aria-label': item },
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
                      {...controlProps(item.productIndex.toString())}
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

