export interface ProductListType {
 created_at: string;
 createdDate: number;
 updatedDate: number;
 productIndex: number;
 productNumber?: string;
 barcodeNumber?: string;
 productName: string;
 productOption?: string;
 packageUnit: string;
 packageMinUnitQuan: number;
 minimumUnit: string;
 processor: number;
 mallNumber: number;
}

// mallNumber: number, // AuthInfo에서 가져올 것
// processor: number,  // AuthInfo에서 가져올 것
// productNumber: string,
// productName: string,
// productOption: string,
// barcodeNumber: string,
// packageUnit: string,
// packageMinUnitQuan: number,
// minimumUnit: string,