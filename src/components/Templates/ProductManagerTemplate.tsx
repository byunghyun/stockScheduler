import React from 'react'
import MaterialTable from 'material-table'
//{height:'calc(100% - 117px)'}
const ProductManagerTemplate = () => {
  return (
   <MaterialTable
     style={{height:'100%'}}
     columns={[
       { title: 'Adqweqweqweqweqeqwe', field: 'name' },
       { title: 'Soyadı', field: 'surname' },
       { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
       { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
     ]}
     data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
     title="Demo Title"
   />
  )
}

export default ProductManagerTemplate