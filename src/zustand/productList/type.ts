import { ProductListType } from "../../entries";

export interface ProductListZustandType {
 productList: Array<ProductListType>;
 setProductList: (data: Array<ProductListType>) => void;
}
