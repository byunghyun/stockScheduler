import { stockListType } from './type';

export const stockListMocks: Array<stockListType> = [
 {
  stockIndex: 1,
  productIndex: 1,
  createdDate: new Date().valueOf(),
  updatedDate: new Date().valueOf(),
  packageQuan: 10,
  unitQuan: 5,
  disposeQuan: 7,
  adjustmentQuan: 3,
  processor: 'admin',
 }
];