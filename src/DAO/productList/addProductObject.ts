import { PostgrestResponse, RealtimeSubscription } from "@supabase/supabase-js";
import { ProductListType } from "../../entries";
import { runSupabase } from "../../service/initializeSuapbase";
import { DAOTypes } from "../types";

export const addProductObject = async (
  newData?: ProductListType,
  successEvent?: (() => void) | undefined, 
  failEvent?: (() => void) | undefined, 
  finallyEvent?: (() => void) | undefined
) => {
 try {
   const user = runSupabase.auth.user();
   const { data, error, status }: PostgrestResponse<any> = await runSupabase
   .from('productList')
   .insert([
     {
        'mallNumber': 0,
        'processor': 0,
        'productNumber': '123',
        'productName': 'qwce',
        'productOption': 'qcwe',
        'barcodeNumber': 'qwce',
        'packageUnit': 'qew',
        'packageMinUnitQuan': 0,
        'minimumUnit': '12ce',
      }
   ]);
   if (error && status !== 406) throw error;
   if (data) {
    successEvent && successEvent();
   }
 } catch (error) {
   failEvent && failEvent();
   console.log(error);
 } finally {
  finallyEvent && finallyEvent();
 }
};
