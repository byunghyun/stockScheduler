import { ProductListType } from "../../entries";

export interface ProductListZustandType {
 productList: Array<ProductListType>;
 selectedProductIndex: number;
 setSelectedProductIndex: (data: number) => void;
 setProductList: (data: Array<ProductListType>) => void;
}
export interface ProductPopupZustandType {
 isShownPopup: boolean,
 popupTitle: string,
 productNumber: string,
 productName: string,
 productOption: string,
 barcodeNumber: string,
 packageUnit: string,
 packageMinUnitQuan: number,
 minimumUnit: string,
 setShowPopup: (data: boolean) => void;
 setPopupTitle: (data: string) => void;
 setProductNumber: (data: string) => void;
 setProductName: (data: string) => void;
 setProductOption: (data: string) => void;
 setBarcodeNumber: (data: string) => void;
 setPackageUnit: (data: string) => void;
 setPackageMinUnitQuan: (data: number) => void;
 setMinimumUnit: (data: string) => void;
 setResetPopup: (data: boolean) => void;
}
