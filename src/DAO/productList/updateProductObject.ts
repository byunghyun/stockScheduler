import { PostgrestResponse, RealtimeSubscription } from "@supabase/supabase-js";
import { ProductListType } from "../../entries";
import { runSupabase } from "../../service/initializeSuapbase";
import { toastify } from "../../util/AlertToast";
import { DAOTypes } from "../types";

export const updateProductObject = async (
  newData: Partial<ProductListType>,
  selectedIndex: number,
  successEvent?: (() => void) | undefined, 
  failEvent?: (() => void) | undefined, 
  finallyEvent?: (() => void) | undefined
) => {
 try {
   console.log('newData', newData);
   console.log('selectedIndex', selectedIndex);
   const user = runSupabase.auth.user();
   const { data, status, error } = await runSupabase
   .from('productList')
   .update(newData)
   .match({ productIndex: selectedIndex })
   if (error && status !== 406) throw error;
   if (data) {
    toastify.success('상품 등록이 완료되었습니다.');
    successEvent && successEvent();
   }
 } catch (error) {
  toastify.error('상품 등록이 실패하였습니다.');
   failEvent && failEvent();
   console.log(error);
 } finally {
  finallyEvent && finallyEvent();
 }
};
