import produce from 'immer';
import _ from 'lodash';
import create from 'zustand';

import { ProductPopupZustandType } from './type';

// const [isShownPopup, setShowPopup] = useState(false);
// const [popupTitle, setPopupTitle] = useState('');

export const useProductPopupStore = create<ProductPopupZustandType>((set) => ({
  isShownPopup: false,
  popupTitle: '',
  productNumber: '',
  productName: '',
  productOption: '',
  barcodeNumber: '',
  packageUnit: '',
  packageMinUnitQuan: 1,
  minimumUnit: '',
  setShowPopup: (data) =>
    set(
      produce((draft) => {
        if (_.isBoolean(data)) draft.isShownPopup = data;
      }),
    ),
  setPopupTitle: (data) =>
    set(
      produce((draft) => {
        if (_.isString(data)) draft.popupTitle = data;
      }),
    ),
  setProductNumber: (data) =>
    set(
      produce((draft) => {
        if (_.isString(data)) draft.productNumber = data;
      }),
    ),
  setProductName: (data) =>
    set(
      produce((draft) => {
        if (_.isString(data)) draft.productName = data;
      }),
    ),
  setProductOption: (data) =>
    set(
      produce((draft) => {
        if (_.isString(data)) draft.productOption = data;
      }),
    ),
  setBarcodeNumber: (data) =>
    set(
      produce((draft) => {
        if (_.isString(data)) draft.barcodeNumber = data;
      }),
    ),
  setPackageUnit: (data) =>
    set(
      produce((draft) => {
        if (_.isString(data)) draft.packageUnit = data;
      }),
    ),
  setPackageMinUnitQuan: (data) =>
    set(
      produce((draft) => {
        if (_.isNumber(data)) draft.packageMinUnitQuan = data;
      }),
    ),
  setMinimumUnit: (data) =>
    set(
      produce((draft) => {
        if (_.isString(data)) draft.minimumUnit = data;
      }),
    ),
  setResetPopup: (data) =>
    set(
      produce((draft) => {
        if (_.isBoolean(data) && data) {
         draft.productNumber = '';
         draft.productName = '';
         draft.productOption = '';
         draft.barcodeNumber = '';
         draft.packageUnit = '';
         draft.packageMinUnitQuan = 1;
         draft.minimumUnit = '';
        }
      }),
    ),
}));
