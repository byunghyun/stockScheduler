import dayjs from 'dayjs';

export class productObjectDTO {
 private mallNumber = 0;
 private processor = 0;
 private productNumber = '';
 private productName = '';
 private productOption = '';
 private barcodeNumber = '';
 private packageUnit = '';
 private packageMinUnitQuan = 0;
 private minimumUnit = '';
 constructor(
  mallNumber: number,
  processor: number,
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