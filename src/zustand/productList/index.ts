import produce from 'immer';
import _ from 'lodash';
import create from 'zustand';

import { ProductListZustandType } from './type';

export const useProductListStore = create<ProductListZustandType>((set) => ({
  selectedProductIndex: 0,
  productList: [],
  setProductList: (data) =>
    set(
      produce((draft) => {
        if (_.isArray(data)) draft.productList = data;
      }),
    ),
  setSelectedProductIndex: (data) =>
    set(
      produce((draft) => {
        if (_.isNumber(data)) draft.selectedProductIndex = data;
      }),
    ),
}));
