import dayjs from 'dayjs';

export class productObjectDTO {
 mallNumber = 0;
 processor = 0;
 createdDate = new Date().valueOf();
 productNumber = '';
 productName = '';
 productOption = '';
 barcodeNumber = '';
 packageUnit = '';
 packageMinUnitQuan = 0;
 minimumUnit = '';
 constructor(
  mallNumber: number, // AuthInfo에서 가져올 것
  processor: number,  // AuthInfo에서 가져올 것
  productNumber: string,
  productName: string,
  productOption: string,
  barcodeNumber: string,
  packageUnit: string,
  packageMinUnitQuan: number,
  minimumUnit: string,
 ) {
  this.mallNumber = mallNumber;
  this.processor = processor;
  this.productNumber = productNumber;
  this.productName = productName;
  this.productOption = productOption;
  this.barcodeNumber = barcodeNumber;
  this.packageUnit = packageUnit;
  this.packageMinUnitQuan = packageMinUnitQuan;
  this.minimumUnit = minimumUnit;
 }
} 